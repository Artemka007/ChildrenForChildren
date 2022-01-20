import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IOffer } from '../../models/offers.model';
import { IUser } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';

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
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.onclose.emit()
  }

  getMutualChat() {
    this.offer?.chat ? this._router.navigateByUrl(`/chats?id=${this.offer?.chat}`) : this._chat.getMutualChat(this.user?.id, this.offer?.user.id)
  }

  userIsEqualAuthor() {
    return this.offer?.user.id === this.user?.id
  }
}
