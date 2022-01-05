import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WSMessage } from './chat.service';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private _reconnectedCount: number = 0

  constructor(private _subject: Subject<WSMessage>) { }

  public connect(url: string): Subject<WSMessage> {
    this._subject = webSocket<WSMessage>({url})
    return this._subject
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
