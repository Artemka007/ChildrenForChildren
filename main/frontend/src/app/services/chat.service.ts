import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IChat, ICreateChat, ICreateMessage, IMessage } from '../models/chat.model';
import { WebsocketService } from './websocket.service';
import { map } from 'rxjs/operators';
import { APIResponse } from '../models/api.model';

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
    this._messages = <Subject<WSMessage>>this._ws.connect(`ws://127.0.0.1:8000/chat/${id}/`).pipe(map((res): WSMessage => {
      return JSON.parse(res.data)
    }))
  }

  getUserChats() {
    return this._http.get<APIResponse<{chats?: IChat[]}>>(`/api/v1/chats/`, {
      headers: {"X-CSRFToken": this._getCookie("csrftoken")}
    })
  }

  getChatById(id: number) {
    return this._http.get<APIResponse<{chat?: IChat}>>(`/api/v1/chats/?id=${id}/`, {
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
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;
    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }
}
