import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  @Output()
  ondelete = new EventEmitter<number>()

  constructor(
    private _offer: OffersService,
    private _chat: ChatService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  splitText(text: string) {
    return text.length > 100 ? text.substring(0, 40) + "..." : text
  }

  open() {
    this.openDetail.emit(this.offer)
  }

  edit() {
    this.offer && this.openEdit.emit({...this.offer})
  }

  delete() {
    let offer = this.offer?.id
    this.ondelete.emit(offer || -1)
  }

  getMutualChat() {
    this.offer?.chat ? this._router.navigateByUrl(`/chats/${this.offer?.chat}`) : this._chat.getMutualChat(this.user?.id, this.offer?.user.id)
  }

  userIsEqualAuthor() {
    return this.offer?.user.id === this.user?.id
  }
}
