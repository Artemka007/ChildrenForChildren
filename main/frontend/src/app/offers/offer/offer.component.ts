import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOffer } from '../../models/offers.model';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
  @Input()
  offer?: IOffer

  @Input()
  user?: User

  @Output()
  openDetail = new EventEmitter<IOffer>()

  @Output()
  openEdit = new EventEmitter<IOffer>()

  constructor(
    private _offer: OffersService,
    private _chat: ChatService
  ) { }

  ngOnInit(): void {
  }

  splitText(text: string) {
    return text.length > 100 ? text.substr(0, 40) + "..." : text
  }

  open() {
    this.openDetail.emit(this.offer)
  }

  edit() {
    this.offer && this.openEdit.emit({...this.offer})
  }

  delete() {
    this._offer.delteOffer(this.offer?.id || -1)
  }

  getMutualChat() {
    this._chat.getMutualChat(this.user?.id, this.offer?.user)
  }

  userIsEqualAuthor() {
    return this.offer?.user === this.user?.id
  }
}
