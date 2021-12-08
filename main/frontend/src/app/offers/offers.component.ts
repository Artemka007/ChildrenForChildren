import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBaseOffer, IOffer } from '../models/offers.model';
import { OffersService } from '../services/offers.service';

export type TQuery = string | {}

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {
  detailsIsOpen: boolean = false
  q: string = ""
  qDetails: TQuery = {}

  offers: IOffer[] = []

  createOfferIsOpen: boolean = false
  detailOfferIsOpen: boolean = false

  offer?: IBaseOffer

  constructor(private _offers: OffersService, private _store: Store) { }

  ngOnInit(): void {
    this.requestToGetAllOffers()
  }

  requestToGetAllOffers() {
    this._offers.getAllOffers().subscribe(data => {
      if (data.result && data.data.offers) {
        this.offers = data.data.offers
      } else {
        console.error(data.message)
      }
    })
  }

  getAllOffers() {
    return this.offers?.filter(i => i.define_type_of_request == "offers")
  }

  getAllRequests() {
    return this.offers?.filter(i => i.define_type_of_request == "requsts")
  }

  getAllQuestions() {
    return this.offers?.filter(i => i.define_type_of_request == "quastions")
  }

  search(q: string | object) {

  }

  createOfferClose() {
    this.createOfferIsOpen = false
    this.requestToGetAllOffers()
  }

  detailOfferClose() {
    this.detailOfferIsOpen = false
    this.offer = undefined
  }

  openDetail(offer: IBaseOffer) {
    this.offer = offer
    this.detailOfferIsOpen = true
  }
}
