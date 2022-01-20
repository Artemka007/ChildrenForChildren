import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { IChat } from '../models/chat.model';
import { User } from '../models/user.model';

@Component({
  selector: 'chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.sass']
})
export class ChatsComponent implements OnInit {
  user?: User
  chat?: IChat
  chats: IChat[] = []
  navIsOpen: boolean = true

  constructor (
    private _store: Store<AppState>
  ) {
    _store.subscribe(data => {
      this.user = data.account.user
      console.log(data.account.user)
      this.chats = data.chats.chats
    })
  }

  ngOnInit(): void { }

  getOtherUserInChat(id?: number) {
    let chat
    if (id) chat = this.chats.find(i => i.id === id)
    else chat = this.chat
    return chat?.users.filter(i => i.id !== this.user?.id)[0]
  }

  openNav() {
    this.navIsOpen = !this.navIsOpen
  }

  chatIsOpen() {
    return window.innerWidth > 1183 || !this.navIsOpen
  }
}
