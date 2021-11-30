import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { IMessage } from '../models/chat.model';

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
    let str = a[a.length - 1]
    let type = '.' + str.split('.')[1]
    return a[a.length - 1].substr(0, 30) + '...'
  }

  openImagesSlider(id: number) {
    this.openSlider.emit({id, urls: this.message?.imgs.map(i => i.file) || []})
  }
}
