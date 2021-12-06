import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from '../models/offers.model';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass']
})
export class OfferComponent implements OnInit {
  @Input()
  offer?: IOffer

  constructor() { }

  ngOnInit(): void {
  }

}
