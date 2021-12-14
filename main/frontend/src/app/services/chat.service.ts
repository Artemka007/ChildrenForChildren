import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IChat, ICreateChat, ICreateMessage, IEditChat } from '../models/chat.model';
import { WebsocketService } from './websocket.service';
import { APIResponse } from '../models/api.model';
import { IUser, User } from '../models/user.model';
import { IOffer } from '../models/offers.model';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { SetUserChats } from '../business/actions/chats.actions';
import { Router } from '@angular/router';
import { UiService } from './ui.service';

export type WSMessage = {
  readonly action: "send_message"
  readonly message: ICreateMessage
} | {
  readonly action: "writing_message"
  readonly user: number
} | {
  readonly action: "read_messages"
  readonly chat: number
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private _messages: Subject<WSMessage>,
    private _http: HttpClient, 
    private _ws: WebsocketService,
    private _store: Store<AppState>,
    private _router: Router,
    private _ui: UiService
  ) { }

  connectToMessages(id: number) {
    this._messages = this._ws.connect(`wss://children-for-children.ru/chat/${id}/`)
  }

  getUserChats() {
    return this._http.get<APIResponse<{chats?: IChat[]}>>(`/api/v1/chats/`, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  getChatById(id: number) {
    return this._http.get<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${id}`, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  getOrCreateChat(users: number[]) {
    return this._http.post<APIResponse<{chat?: IChat, chats?: IChat[]}>>(`/api/v1/chats/`, {users}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  createGroupChat(chat: ICreateChat) {
    return this._http.post<APIResponse<{chat?: IChat, chats?: IChat[], errors?: {[key: string]: string}[]}>>(`/api/v1/chats/`, chat, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  editChat(chat: IEditChat, chatId: number, action?: "remove_user") {
    return this._http.put<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${chatId}&action=${action}`, {...chat}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  signout(id: number) {
    return this._http.put<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${id}&action=remove_user`, {id}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  ban(id: number, userId: number) {
    return this._http.put<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${id}&userId=${userId}&action=ban_user`, {id}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  uploadFile(fd: FormData, type: "img" | "doc") {
    return this._http.post<APIResponse<{id?: number}>>(`/api/v1/chats/messages/upload/?type=${type}`, fd, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")},
      reportProgress: true,
      observe: 'events'
    })
  }

  uploadPhoto(fd: FormData, id: number) {
    return this._http.post<APIResponse<{chat?: IChat}>>(`/api/v1/chats/photo/upload/?id=${id}`, fd, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  deleteUploadedFile(id: number, type: "img" | "doc") {
    return this._http.delete<APIResponse<{id?: number}>>(`/api/v1/chats/messages/upload/?type=${type}&id=${id}`, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  sendMessage(message: ICreateMessage) {
    console.log("----SEND_MESSAGE_IN_SERVICE-----", "\n", message.body)
    this._messages.next({"action": "send_message", message})
  }

  writingMessage(user: number) {
    this._messages.next({"action": "writing_message", user})
  }

  readMessage(chat: number) {
    this._messages.next({"action": "read_messages", chat})
  }

  get messages() {
    return this._messages
  }

  getMutualChat(firstUser?: number, lastUser?: number) {
    this.getOrCreateChat([firstUser || -1, lastUser || -1]).subscribe(data => {
      if (data.result && data.data.chat && data.data.chats) {
        let chat = data.data.chat
        this._store.dispatch(new SetUserChats(data.data.chats))
        this._router.navigateByUrl(`/chats?id=${chat}`)
      } else {
        this._ui.openWarning({message: data.message, class: "error"})
      }
    })
  }
  
  private _getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(';')
    let caLen: number = ca.length
    let cookieName = `${name}=`
    let c: string
    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '')
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length)
        }
    }
    return ''
  }
}
