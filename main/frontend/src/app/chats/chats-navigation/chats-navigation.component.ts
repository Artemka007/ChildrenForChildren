import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IChat } from 'src/app/models/chat.model';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'cfc-chats-navigation',
  templateUrl: './chats-navigation.component.html',
  styleUrls: ['./chats-navigation.component.sass']
})
export class ChatsNavigationComponent implements OnInit {
  @Input()
  chats: IChat[] = []
  @Input()
  user?: User
  @Input()
  isOpen: boolean = false
  @Input()
  chatName: string = 'Без названия'

  startChatCreating: boolean = false
  left: number = 0

  constructor(
    private nav: ElementRef<HTMLDivElement>,
    private _chat: ChatService
  ) {
    this._chat.getUserChats().subscribe(data => {
      if (data.result) this.chats = data.data.chats || []
      else console.error(data.message)
    })
  }

  ngOnInit(): void {
    this.left = this.nav.nativeElement.getBoundingClientRect().left
  }

  getChatName(chat: IChat) {
    if (chat.is_group) {
      return chat.title || "Без названия"
    }
    else {
      let user = this.getOtherUserInChat(chat)
      return user?.first_name + " " + user?.last_name
    }
  }

  getOtherUserInChat(chat: IChat) {
    return chat?.users.filter(i => i.id !== this.user?.id)[0]
  }

  getLastMessage(c: IChat) {
    let isBan = this.user ? c.banned_list.includes(this.user.id) : false
    let lastMessage = c.messages[c.messages.length - 1]
    if (isBan) return "Вы забанены..."
    else if (lastMessage) return lastMessage.body
    else return "Сообщений пока что нет."
  }

}
