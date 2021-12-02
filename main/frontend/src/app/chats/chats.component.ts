import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IChat, ICreateChat, ICreateMessage, IEditChat } from '../models/chat.model';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { IUser, User } from '../models/user.model';
import { SetUserChats } from '../business/actions/chats.actions';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.sass']
})
export class ChatsComponent implements OnInit {
  @ViewChild("chatBody", {static: false})
  chatBody?: ElementRef<HTMLDivElement>

  @ViewChildren("chatMessage")
  chatMessages?: QueryList<ChatMessageComponent>

  intervalRef?: any

  writingUsers: IUser[] = []

  chat_id?: number
  user?: User
  chat?: IChat
  chats: IChat[] = []
  chatInfoIsOpen: boolean = false
  chatNavIsOpen: boolean = false

  message: ICreateMessage = {
    user: -1,
    chat: -1,
    body: "",
    is_forwarded: false,
    imgs: [],
    docs: []
  }

  uploadigFiles: {id?: number, type: "img" | "doc", name: string, progress: number, progressColor?: string}[] = []

  chatForEdit: IEditChat = {
    photo:  undefined,
    title:  undefined,
    about:  undefined,
    users:         [],
    moderators:    [],
    banned_list:   [],
    is_private: false,
  }
  isEditing: boolean = false

  uploadSubscription?: Subscription

  imageIdForImageSlider: number = 0
  imagesForImageSlider: string[] = []
  imageSliderIsOpen: boolean = false

  constructor (
    private _router: Router,
    private _route: ActivatedRoute,
    private _chat: ChatService,
    private _store: Store<AppState>
  ) {
    _store.subscribe(data => {
      this.user = data.account.user
      this.chats = data.chats.chats
      this.message["user"] = this.user?.id || -1
      _route.queryParams.subscribe(p => {
        let id = parseInt(p["id"])
        if (id) {
          this.chat = data.chats.chats.find(i => i.id === id)
          if (this.chat) {
            let {title, about, users, banned_list, moderators, is_private} = this.chat
            this.chatForEdit = {photo: undefined, title, about, users: users.map(i => {return i.id}), moderators, banned_list, is_private}
            this.message["chat"] = id
            this.chatBody && this.scroll(this.chatBody.nativeElement)
            this._chat.readMessage(id)
          }
        } else {
          this.chatNavIsOpen = true
        }
      })
    })
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(p => {
      let id = parseInt(p["id"])
      if (id) {
        this.connect(id)
      }
    })
  }

  connect(id: number) {
    this._chat.connectToMessages(id)
    this._chat.subscribeToMessages().subscribe(data => {
      this._subscribeToWSMessages(data)
    })
  }

  getChatTitle() {
    if (this.user && this.chat) {
      if (this.chat.title) return this.chat.title
      else if (this.chat.is_group) return "Чат 1"
      else {
        let user = this.chat.users.filter(i => i.id !== this.user?.id)[0]
        return user.first_name + " " + user.last_name
      }
    }
    return null
  }

  sendMessage() {
    this._chat.sendMessage(this.message)
  }

  uploadFile(event: Event, type: "img" | "doc") {
    let el = event.target as HTMLInputElement
    let fileList: FileList | null = el.files
    let fd = new FormData()
    if (fileList) {
      let f = fileList[0]
      if (f.name.length > 100) {
        console.error("Длина названия файла не может быть больше 100 символов.")
      } else {
        let uf = {type, name: f.name, progress: 0}
        fd.append("file", f)
        this.uploadigFiles.push(uf)
        let uploadingFilesLastId = this.uploadigFiles.length - 1
        this.uploadSubscription = this._chat.uploadFile(fd, type).subscribe(data => {
          if (data.type === HttpEventType.UploadProgress && data.total) {
            this.uploadigFiles[uploadingFilesLastId].progress = Math.round(data.loaded / data.total * 100)
          } else if (data.type === HttpEventType.Response) {
            if (data.body?.data.id) {
              type === "img" && this.message['imgs'].push(data.body?.data.id)
              type === "doc" && this.message['docs'].push(data.body?.data.id)
              this.uploadigFiles[uploadingFilesLastId].id = data.body.data.id
            }
          }
        })
       }
    }
  }

  breakUpload() {
    this.uploadSubscription?.unsubscribe()
    let uploadingFilesLastId = this.uploadigFiles.length - 1
    this.uploadigFiles.splice(uploadingFilesLastId, 1)
  }

  deleteUploadedFile(type: "img" | "doc", id?: number) {
    id && this._chat.deleteUploadedFile(id, type).subscribe(data => {
      if (type === 'img') {
        this.message['imgs'].splice(this.message.imgs.indexOf(id), 1)
      } else if (type === 'doc') {
        this.message['docs'].splice(this.message.docs.indexOf(id), 1)
      }
      let uf = this.uploadigFiles.find(i => i.id === id)
      uf && this.uploadigFiles.splice(this.uploadigFiles.indexOf(uf), 1)
    })
  }

  openImageSlider(data: {id: number, urls: string[]}) {
    this.imagesForImageSlider = data.urls
    this.imageIdForImageSlider = data.id
    this.imageSliderIsOpen = true
  }

  closeImageSlider() {
    this.imagesForImageSlider = []
    this.imageIdForImageSlider = 0
    this.imageSliderIsOpen = false
  }

  writingMessage() {
    this._chat.writingMessage(this.user?.id || -1)
  }

  scroll(el: HTMLElement) {
    el.scrollTop = el.scrollHeight
  }

  getWritingUsersString() {
    let totalString = ""
    let a = this.writingUsers.map(i => {return `${i.first_name} ${i.last_name}`})
    for (let i = 0;i < a.length;i++) {
      totalString += a[i]
      if (i + 1 !== a.length) {
        totalString += ", "
      }
    }
    totalString = totalString.length > 60 ? totalString.substring(0, 80) + "..." : totalString
    return totalString.length >= 1 ? totalString + " печатает..." : totalString + " печатают..."
  }

  startEditing() {
    this.isEditing = true
  }

  stopEditing() {
    this.isEditing = false
  }

  editChat() {
    this.chat && this._chat.editChat(this.chatForEdit, this.chat.id).subscribe(data => {
      if (data.result) {
        this.chat = data.data.chat
        if (this.chat) {
          let {title, about, users, banned_list, moderators, is_private} = this.chat
          this.chatForEdit = {photo: undefined, title, about, users: users.map(i => {return i.id}), moderators, banned_list, is_private}
        }
      }
      else console.error(data.message)
    })
    this.stopEditing()
  }

  signoutFromChat() {
    this.chat && this._chat.signout(this.chat.id).subscribe(data => {
      if (data.result) {
        this.chat = data.data.chat
        this.chatForEdit.banned_list = data.data.chat?.banned_list || this.chatForEdit.banned_list
      }
      else console.error(data.message)
    })
  }

  banUser(id: number) {
    this.chat && this._chat.ban(this.chat.id, id).subscribe(data => {
      if (data.result) {
        this.chat = data.data.chat
        this.chatForEdit.banned_list = data.data.chat?.banned_list || this.chatForEdit.banned_list
        console.log(data.data.chat)
      }
      else console.error(data.message)
    })
  }

  checkUserIsAdmin(id?: number) {
    return this.user ? this.chat?.admins.includes(id || this.user.id) : false
  }

  checkUserIsModer(id?: number) {
    return this.user ? this.chat?.moderators.includes(id || this.user.id) : false
  }

  checkUserIsBanned(id?: number) {
    return this.user ? this.chat?.banned_list.includes(id || this.user.id) : false
  }

  checkUserCanEditChat() {
    switch (this.chat?.who_can_edit_chat) {
      case "everybody": return true
      case "admins_and_moders": return this.checkUserIsAdmin() || this.checkUserIsModer
      case "admins": return this.checkUserIsAdmin()
      default: return false
    }
  }

  getOtherUserInChat(id?: number) {
    let chat
    if (id) chat = this.chats.find(i => i.id === id)
    else chat = this.chat
    return chat?.users.filter(i => i.id !== this.user?.id)[0]
  }

  setChatNavIsOpen() {
    this.chatNavIsOpen = !this.chatNavIsOpen
    if (this.chatNavIsOpen && window.innerWidth < 1043) {
      this.chatInfoIsOpen = false
    }
  }

  setChatInfoIsOpen() {
    this.chatInfoIsOpen = !this.chatInfoIsOpen
    if (this.chatInfoIsOpen && window.innerWidth < 1043) {
      this.chatNavIsOpen = false
    }
  }

  chatIsOpen() {
    return window.innerWidth > 767
  }

  private _subscribeToWSMessages(data: any) {
    switch (data.action) {
      case "send_message": {
        if (data.message) {
          let chatsCopy = [...this.chats]
          let messageCopy = {...data.message}
          let chat = chatsCopy.find(i => i.id === data.message.chat)
          if (chat) {
            let chatCopy = {...chat}
            let id = chatsCopy.indexOf(chat)
            chatCopy.messages = [...chatCopy.messages, messageCopy]
            chatsCopy.splice(id, 1, chatCopy)
          }
          this._store.dispatch(new SetUserChats(chatsCopy))
        }
        break
      }

      case "writing_message": {
        let id = this.writingUsers.map(i => i.id).indexOf(data.user.id)
        if (id === -1) {
          this.writingUsers.push(data.user)
        }
        if (this.intervalRef) clearInterval(this.intervalRef)
        this.intervalRef = setInterval(() => {
          this.writingUsers.splice(id, 1)
        }, 2000)
        console.log(id)
        break
      }

      case "read_messages": {
        if (data.id && this.user) {
          let chatsCopy = [...this.chats]
          let chat = chatsCopy.find(i => i.id === data.id)
          if (chat) {
            let chatCopy = {...chat}
            let id = chatsCopy.indexOf(chat)
            chatCopy.messages = chatCopy.messages.map(i => {
              this.user && i.readers.push(this.user.id)
              return i
            })
            chatsCopy.splice(id, 1, chatCopy)
          }
          this._store.dispatch(new SetUserChats(chatsCopy))
        }
        break
      }

      default: console.error("Action in data is incorrect")
    }
  }

}
