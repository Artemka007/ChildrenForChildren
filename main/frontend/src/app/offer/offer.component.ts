import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBaseOffer } from '../models/offers.model';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
  @Input()
  offer?: IBaseOffer

  @Output()
  openDetail = new EventEmitter<IBaseOffer>()

  constructor() { }

  ngOnInit(): void {
  }

  splitText(text: string) {
    return text.length > 100 ? text.substr(0, 100) + "..." : text
  }

  open() {
    this.openDetail.emit(this.offer)
  }
}
