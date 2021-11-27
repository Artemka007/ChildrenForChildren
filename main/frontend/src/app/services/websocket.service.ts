import { Injectable } from '@angular/core';
import { ConnectableObservable, from, interval, Observable, Observer, Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { multicast } from 'rxjs/operators';
import { WSMessage } from './chat.service';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private _reconnectedCount: number = 0

  constructor(private _subject: Subject<MessageEvent>) { }

  public connect(url: string): Subject<MessageEvent> {
    if (!this._subject.observers.length) {
      this._subject = this.create(url)
    }
    return this._subject
  }
  
  public create(url: string): Subject<MessageEvent> {
    let ws = new WebSocket(url)
    let observable = new Observable<MessageEvent>((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs)
      ws.onerror = obs.error.bind(obs)
      ws.onclose = obs.error.bind(obs)
      return ws.close.bind(ws)
    })

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          this._reconnectedCount = 0
          ws.send(JSON.stringify(data))
        } else if (this._reconnectedCount < 1000) {
          this._reconnectedCount += 1
          interval(1000).subscribe(() => {ws.send(JSON.stringify(data))})
        } else {
          ws.close()
        }
      },
      error: (err: any) =>  {
        console.log(err)
      },
      complete: () => {}
    }
    let sub = new AnonymousSubject(observer, observable)
    return sub
  }
}
