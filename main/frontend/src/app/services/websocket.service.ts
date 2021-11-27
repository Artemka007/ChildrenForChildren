import { Injectable } from '@angular/core';
import { ConnectableObservable, from, interval, Observable, Observer, Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { multicast } from 'rxjs/operators';
import { WSMessage } from './chat.service';
import { webSocket } from 'rxjs/webSocket';
const subject = webSocket("ws://localhost:8081");

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
