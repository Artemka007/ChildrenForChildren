import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IChat, ICreateMessage, IEditChat } from '../models/chat.model';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { IUser, User } from '../models/user.model';
import { SetUserChats } from '../business/actions/chats.actions';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { HttpEventType } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UiService } from '../services/ui.service';

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

  @ViewChild("messageField")
  messageField?: ElementRef<HTMLTextAreaElement>
  
  fieldHeight: number = 0

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
  isCreating: boolean = false
  isChatPhotoOpen: boolean = false

  imageIdForImageSlider: number = 0
  imagesForImageSlider: string[] = []
  imageSliderIsOpen: boolean = false

  constructor (
    private _router: Router,
    private _route: ActivatedRoute,
    private _chat: ChatService,
    private _store: Store<AppState>,
    private _ui: UiService
  ) {
    this.chatMessages?.changes.subscribe(i => {
      this.chatBody && this.scroll(this.chatBody.nativeElement)
    })
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
            this.autogrow()
            this._chat.readMessage(id)
          } else  {
            this._chat.getChatById(id).subscribe(data => {
              if (data.data.chat) {
                if (data.data.chat.users.map(i => i.id).includes(this.user?.id || -1) || data.data.chat.is_group) {
                  this.chat = data.data.chat
                } else {
                  this._router.navigateByUrl("/chats")
                }
              } else this._ui.openWarning({"class": "error", "message": data.message})
            })
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
        this._chat.connectToMessages(id)
        this._chat.subscribeToMessages().subscribe(data => {
          this._subscribeToWSMessages(data)
        })
      }
    })
  }

  checkUserIsInChat() {
    return this.chat?.users.map(i => i.id).includes(this.user?.id || -1)
  }

  chatPhotoUpload(fd: FormData) {
    this.chat && this._chat.uploadPhoto(fd, this.chat.id).subscribe(data => {
      if (data.data.chat) {
        this.chat = data.data.chat
        this.isEditing = false
      }
    }, error => {
      this._ui.openWarning({class: "error", message: error.message})
    })
  }

  getChatTitle() {
    if (this.user && this.chat) {
      if (this.chat.title) return this.chat.title
      else if (this.chat.is_group) return "Без названия"
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

  autogrow(){
    if (this.messageField) {
      let textArea = this.messageField.nativeElement
      textArea.style.overflow = 'hidden';
      textArea.style.height = '0px';
      textArea.style.height = textArea.scrollHeight + 'px';
    }
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
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
    this.stopEditing()
  }

  signoutFromChat() {
    this.chat && this._chat.signout(this.chat.id).subscribe(data => {
      if (data.result) {
        this.chat = data.data.chat
        this.chatForEdit.banned_list = data.data.chat?.banned_list || this.chatForEdit.banned_list
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
  }

  banUser(id: number) {
    this.chat && this._chat.ban(this.chat.id, id).subscribe(data => {
      if (data.result) {
        this.chat = data.data.chat
        this.chatForEdit.banned_list = data.data.chat?.banned_list || this.chatForEdit.banned_list
        console.log(data.data.chat)
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
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
      case "admins_and_moders": return this.checkUserIsAdmin() || this.checkUserIsModer()
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
    if (this.chatNavIsOpen && window.innerWidth < 1183) {
      this.chatInfoIsOpen = false
    }
  }

  setChatInfoIsOpen() {
    this.chatInfoIsOpen = !this.chatInfoIsOpen
    if (this.chatInfoIsOpen && window.innerWidth < 1183) {
      this.chatNavIsOpen = false
    }
  }

  chatIsOpen() {
    return window.innerWidth > 1183
  }

  checkUserNotIsBanned(chat?: IChat) {
    let c = chat || this.chat
    if (c && this.user) return c.banned_list.indexOf(this.user?.id) === -1
    else return false
  }

  copyLink() {
    window.navigator.clipboard.writeText(`${this.user?.firstName} ${this.user?.lastName} приглашает Вас в группу "${this.chat?.title}".\nСсылка на группу: ${location.href}`)
    this._ui.openWarning({"class": "ok", "message": "Приглашение скопированно в буфер обмена."})
  }

  private _subscribeToWSMessages(data: any) {
    switch (data.action) {
      case "send_message": {
        if (data.message) {
          this._chat.getUserChats().subscribe(data => {
            if (data.data.chats) this._store.dispatch(new SetUserChats(data.data.chats))
            else this._ui.openWarning({"class": "error", "message": data.message})
          })
        }
        break
      }

      case "writing_message": {
        let id = this.writingUsers.map(i => i.id).indexOf(data.user.id)
        if (id === -1) {
          this.writingUsers.push(data.user)
        }
        interval(2000).pipe(take(1)).subscribe(() => {
          this.writingUsers.splice(id, 1)
        })
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
