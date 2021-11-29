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
    this._subject = webSocket<WSMessage>(url)
    return this._subject
  }
}
