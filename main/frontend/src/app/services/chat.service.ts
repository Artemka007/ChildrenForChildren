import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IChat, ICreateMessage, IEditChat } from '../models/chat.model';
import { WebsocketService } from './websocket.service';
import { APIResponse } from '../models/api.model';
import { IUser } from '../models/user.model';

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
    private _ws: WebsocketService
  ) { }

  connectToMessages(id: number) {
    this._messages = this._ws.connect(`ws://127.0.0.1:8000/chat/${id}/`)
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
    return this._http.post<APIResponse<{chat?: IChat}>>(`/api/v1/chats/`, {users}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  editChat(chat: IEditChat, chatId: number, action?: "remove_user") {
    return this._http.put<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${chatId}&action=${action}`, {csrfmiddlewaretoken: this._getCookie("csrftoken"), ...chat}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  signout(id: number) {
    return this._http.put<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${id}&action=remove_user`, {csrfmiddlewaretoken: this._getCookie("csrftoken"), id}, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  ban(id: number, userId: number) {
    return this._http.put<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${id}&userId=${userId}&action=ban_user`, {csrfmiddlewaretoken: this._getCookie("csrftoken"), id}, {
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

  deleteUploadedFile(id: number, type: "img" | "doc") {
    return this._http.delete<APIResponse<{id?: number}>>(`/api/v1/chats/messages/upload/?type=${type}&id=${id}`, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  sendMessage(message: ICreateMessage) {
    this._messages.next({"action": "send_message", message})
  }

  writingMessage(user: number) {
    this._messages.next({"action": "writing_message", user})
  }

  readMessage(chat: number) {
    this._messages.next({"action": "read_messages", chat})
  }

  subscribeToMessages() {
    return this._messages
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
