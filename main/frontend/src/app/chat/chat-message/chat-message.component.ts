import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMessage } from '../../models/chat.model';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.sass']
})
export class ChatMessageComponent implements OnInit {
  @Input()
  message?: IMessage

  @Input()
  userId: number = -1

  @Output()
  openSlider = new EventEmitter<{id: number, urls: string[]}>()

  constructor() { }

  ngOnInit(): void {
  }

  checkMessageIsFromUser() {
    return this.message?.user.id === this.userId
  }

  checkUserIsReadMessage() {
    let r = this.message?.readers
    return r ? r.includes(this.userId) && r.length > 1 : false
  }

  spliceFileURL(path: string) {
    let a = path.split('/')
    return a[a.length - 1].substring(0, 23) + '...'
  }

  openImagesSlider(id: number) {
    this.openSlider.emit({id, urls: this.message?.imgs.map(i => i.file) || []})
  }
}
