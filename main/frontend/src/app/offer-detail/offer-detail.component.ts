import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { SetUserChats } from '../business/actions/chats.actions';
import { IOffer } from '../models/offers.model';
import { IUser } from '../models/user.model';
import { ChatService } from '../services/chat.service';
import { UiService } from '../services/ui.service';

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
    private _chat: ChatService,
    private _router: Router,
    private _store: Store<AppState>,
    private _ui: UiService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.onclose.emit()
  }

  getSameChat() {
    this._chat.getOrCreateChat([this.user?.id || -1, this.offer?.user || -1]).subscribe(data => {
      if (data.result && data.data.chat && data.data.chats) {
        let chat = data.data.chat
        this._store.dispatch(new SetUserChats(data.data.chats))
        this._router.navigateByUrl(`/chats?id=${chat}`)
      } else {
        this._ui.openWarning({message: data.message, class: "error"})
      }
    })
  }

  userIsEqualAuthor() {
    return this.offer?.user === this.user?.id
  }
}
