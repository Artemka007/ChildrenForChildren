import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/business';
import { ReadMessages, SendMessage } from 'src/app/business/actions/chats.actions';
import { IChat, ICreateMessage } from 'src/app/models/chat.model';
import { IUser } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'cfc-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.sass']
})
export class ChatBodyComponent implements OnInit {
  @ViewChild("messageField")
  field!: HTMLTextAreaElement

  @Input()
  user!: IUser

  @Input()
  chat!: IChat

  @Input()
  navIsOpen?: boolean

  @Output()
  openNav = new EventEmitter()

  @Output()
  openSlider = new EventEmitter()

  message: ICreateMessage = {
    user: this.user.id,
    chat: this.chat.id,
    body: "",
    is_forwarded: false,
    imgs: [],
    docs: []
  }

  writingUsers: IUser[] = []

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _chat: ChatService,
    private _store: Store<AppState>,
    private _ui: UiService
  ) {
    this._chat.messages.subscribe(this._wsSubscription)
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this._chat.sendMessage(this.message)
    this.field.value = ''
  }

  writingMessage() {
    this._chat.writingMessage(this.user?.id || -1)
  }

  readMessage() {
    this._chat.readMessage(this.chat?.id || -1)
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

  getLastChatMessage(c: IChat) {
    let msg = (this.checkUserNotIsBanned(c) ? c.messages[c.messages.length - 1]?.body ? c.messages[c.messages.length - 1]?.body : "Сообщений пока что нет." : "Вы забанены...")
    return msg.length < 30 ? msg : msg.substring(0, 30) + "..."
  }

  getOtherUserInChat() {
    let chat = this.chat
    return chat?.users.filter(i => i.id !== this.user?.id)[0]
  }

  chatIsOpen() {
    return window.innerWidth > 1183
  }

  checkUserNotIsBanned(chat?: IChat) {
    let c = chat || this.chat
    if (c && this.user) return c.banned_list.indexOf(this.user?.id) === -1
    else return false
  }

  checkUserIsInChat() {
    return this.chat?.users.map(i => i.id).includes(this.user?.id || -1)
  }

  signinToChat() {
    this.chat && this._chat.signin(this.chat.id).subscribe(data => {
      if (data.result && data.data.chat) {
        this.chat = data.data.chat
      }
      else this._ui.openWarning({"class": "error", "message": data.message})
    })
  }

  private _wsSubscription(data: any) {
    switch (data.action) {
      case "send_message": {
        if (data.message) {
          try {
            this._store.dispatch(new SendMessage(this.chat.id, data.message))
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
