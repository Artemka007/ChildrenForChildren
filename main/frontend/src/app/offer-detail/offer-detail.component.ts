import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IBaseOffer } from '../models/offers.model';

@Component({
  selector: 'offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.sass']
})
export class OfferDetailComponent implements OnInit {
  @Input()
  offer?: IBaseOffer

  @Output()
  onclose = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onclose.emit()
  }
}
