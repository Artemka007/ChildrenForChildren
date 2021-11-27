import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IChat, ICreateMessage } from '../models/chat.model';
import { ChatService, WSMessage } from '../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { IUser, User } from '../models/user.model';
import { SetUserChats } from '../business/actions/chats.actions';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { interval } from 'rxjs';

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

  message: ICreateMessage = {
    user: -1,
    chat: -1,
    body: "",
    is_forwarded: false
  }

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
          this.message["chat"] = id
          this.chatBody && this.scroll(this.chatBody.nativeElement)
          this._chat.readMessage(id)
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

  editChat() {

  }

  signoutFormChat() {

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
