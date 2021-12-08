import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBaseOffer, IOffer } from '../models/offers.model';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
  @Input()
  offer?: IOffer

  @Output()
  openDetail = new EventEmitter<IOffer>()

  constructor() { }

  ngOnInit(): void {
  }

  splitText(text: string) {
    return text.length > 100 ? text.substr(0, 40) + "..." : text
  }

  open() {
    this.openDetail.emit(this.offer)
  }
}
