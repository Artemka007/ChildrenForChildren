import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/business';
import { SetUserChats } from 'src/app/business/actions/chats.actions';
import { ICreateChat } from 'src/app/models/chat.model';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-create-chat-form',
  templateUrl: './create-chat-form.component.html',
  styleUrls: ['./create-chat-form.component.sass']
})
export class CreateChatFormComponent implements OnInit {
  @Output()
  onclose = new EventEmitter()

  @Input()
  user?: User

  chat: ICreateChat = {
    title: "",
    about: "",
    who_can_edit_chat: "everybody",
    users: [],
    moderators: [],
    admins: [],
    is_private: false,
    is_group: true
  }
  isLoading: boolean = false

  constructor(
    private _chat: ChatService,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.user && this.chat.users.push(this.user.id)
    this.user && this.chat.admins.push(this.user.id)
  }

  createChat() {
    this._chat.createGroupChat(this.chat).subscribe(data => {
      this._chat.getUserChats().subscribe(data => {
        this._store.dispatch(new SetUserChats(data.data.chats || []))
        this.close()
      })
    })
  }

  close() {
    this.onclose.emit()
  }
}
