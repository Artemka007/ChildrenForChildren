import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../business';
import { ReadMessages, SendMessage } from '../business/actions/chats.actions';
import { IChat, ICreateMessage, IEditChat } from '../models/chat.model';
import { IUser, User } from '../models/user.model';
import { ChatService } from '../services/chat.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'cfc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  @ViewChild("messageField")
  field?: ElementRef<HTMLTextAreaElement>

  @ViewChild("chatBody")
  chatBody?: ElementRef<HTMLDivElement>

  @Output()
  openNav = new EventEmitter()

  @Input()
  user?: User

  @Input()
  chat?: IChat

  @Input()
  chatForEdit!: IEditChat

  @Input()
  navIsOpen: boolean = false

  fieldHeight: number = 0

  writingUsers: IUser[] = []

  infoIsOpen: boolean = false

  message: ICreateMessage = {
    user: this.user?.id || -1,
    chat: this.chat?.id || -1,
    body: "",
    is_forwarded: false,
    imgs: [],
    docs: []
  }

  uploadigFiles: {id?: number, type: "img" | "doc", name: string, progress: number, progressColor?: string}[] = []

  isEditing: boolean = false
  isCreating: boolean = false
  isChatPhotoOpen: boolean = false

  imageIdForImageSlider: number = 0
  imagesForImageSlider: string[] = []
  imageSliderIsOpen: boolean = false

  constructor (
    private _chat: ChatService,
    private _store: Store<AppState>,
    private _ui: UiService
  ) {
    this._chat.messages.subscribe(data => {
      this._wsSubscription(data)
    })
  }

  ngOnInit(): void {
    this.chatBody && this.scroll(this.chatBody.nativeElement)
    this.message = {...this.message, user: this.user?.id || -1, chat: this.chat?.id || -1}
  }

  sendMessage() {
    this._chat.sendMessage(this.message)
    if(this.field) this.field.nativeElement.value = ''
  }

  writingMessage() {
    this._chat.writingMessage(this.user?.id || -1)
  }

  readMessage() {
    this._chat.readMessage(this.chat?.id || -1)
  }

  copyLink() {
    window.navigator.clipboard.writeText(`${this.user?.firstName} ${this.user?.lastName} приглашает Вас в группу "${this.chat?.title}".\nСсылка на группу: ${location.href}`)
    this._ui.openWarning({"class": "ok", "message": "Приглашение скопированно в буфер обмена."})
  }

  scroll(el: HTMLElement) {
    el.scrollTop = el.scrollHeight
  }

  startEditing() {
    this.isEditing = true
  }

  stopEditing() {
    this.isEditing = false
  }

  openSlider(data: {id: number, urls: string[]}) {
    this.imagesForImageSlider = data.urls
    this.imageIdForImageSlider = data.id
    this.imageSliderIsOpen = true
  }

  editChat() {
    this.chat && this._chat.editChat(this.chatForEdit, this.chat.id).subscribe(data => {
      if (data.result && data.data.chat) {
        this.chat = data.data.chat
        let {title, about, users, banned_list, moderators, is_private} = this.chat
        this.chatForEdit = {photo: undefined, title, about, users: users.map(i => {return i.id}), moderators, banned_list, is_private}
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
    this.stopEditing()
  }

  signoutFromChat() {
    this.chat && this._chat.signout(this.chat.id).subscribe(data => {
      if (data.result && data.data.chat) {
        this.chat = data.data.chat
        this.chatForEdit.users = data.data.chat?.users.map(i => i.id) || this.chatForEdit.users
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
  }

  signinToChat() {
    this.chat && this._chat.signin(this.chat.id).subscribe(data => {
      if (data.result && data.data.chat) {
        this.chat = data.data.chat
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
  }

  banUser(id: number) {
    this.chat && this._chat.ban(this.chat.id, id).subscribe(data => {
      if (data.result && data.data.chat) {
        this.chat = data.data.chat
        this.chatForEdit.banned_list = data.data.chat?.banned_list || this.chatForEdit.banned_list
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
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

  checkUserIsAdmin(id?: number) {
    return this.user ? this.chat?.admins.includes(id || this.user.id) : false
  }

  checkUserIsModer(id?: number) {
    return this.user ? this.chat?.moderators.includes(id || this.user.id) : false
  }

  checkUserCanEditChat() {
    switch (this.chat?.who_can_edit_chat) {
      case "everybody": return true
      case "admins_and_moders": return this.checkUserIsAdmin() || this.checkUserIsModer()
      case "admins": return this.checkUserIsAdmin()
      default: return false
    }
  }

  getLastChatMessage(c: IChat) {
    let msg = (this.userNotBanned(c) ? c.messages[c.messages.length - 1]?.body ? c.messages[c.messages.length - 1]?.body : "Сообщений пока что нет." : "Вы забанены...")
    return msg.length < 30 ? msg : msg.substring(0, 30) + "..."
  }

  getOtherUserInChat() {
    let chat = this.chat
    return chat?.users.filter(i => i.id !== this.user?.id)[0]
  }

  chatIsOpen() {
    return window.innerWidth > 1183 || !this.infoIsOpen
  }

  userNotBanned(chat?: IChat, user?: number) {
    let c = chat || this.chat
    if (c && this.user) return c.banned_list.indexOf(user || this.user?.id) === -1
    else return false
  }

  checkUserIsInChat() {
    return this.chat?.users.map(i => i.id).includes(this.user?.id || -1)
  }

  openInfo() {
    this.infoIsOpen = !this.infoIsOpen
    if (this.infoIsOpen && window.innerWidth < 1183) {
      this.navIsOpen = false
    }
  }

  private _wsSubscription(data: any) {
    switch (data.action) {
      case "send_message": {
        if (data.message) {
          try {
            this._store.dispatch(new SendMessage(this.chat?.id || -1, data.message))
          } catch (e) {
            this._ui.openWarning({"class": "error", "message": (<Error>e).message})
          }
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
        if (data.chat) {
          if (this.user){
            this._store.dispatch(new ReadMessages(data.chat, this.user?.id))
          }
        }
        break
      }

      default: console.error("Action in data is incorrect")
    }
  }
}
