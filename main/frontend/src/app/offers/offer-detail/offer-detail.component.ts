import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../business';
import { SetUserChats } from '../../business/actions/chats.actions';
import { IOffer } from '../../models/offers.model';
import { IUser } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.sass']
})
export class OfferDetailComponent implements OnInit {
  @Input()
  offer?: IOffer
  @Input()
  user?: IUser

  @Output()
  onclose = new EventEmitter()

  constructor(
    private _chat: ChatService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.onclose.emit()
  }

  getMutualChat() {
    this._chat.getMutualChat(this.user?.id, this.offer?.user.id)
  }

  userIsEqualAuthor() {
    return this.offer?.user.id === this.user?.id
  }
}
