import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../models/chat.model';
import { User } from '../models/user.model';

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

}
