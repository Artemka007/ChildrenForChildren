import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { AppState } from '../business';
import { IBaseOffer, ICreateOffer, IOffer } from '../models/offers.model';
import { User } from '../models/user.model';
import { OffersService } from '../services/offers.service';
import { UiService } from '../services/ui.service';

export type TQuery = string | {
  title: string,
  about: string,
  subject__name: string,
  define_type_of_request: string
}

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {
  detailsIsOpen: boolean = false
  q: string = ""
  qDetails = {
    title: "",
    about: "",
    subject__name: "",
    define_type_of_request: "offers"
  }

  @Input()
  offers?: IOffer[]
  @Input()
  isframe: boolean = false

  createOfferIsOpen: boolean = false
  detailOfferIsOpen: boolean = false

  offer?: IOffer

  user?: User

  action: "edit" | "create" = "create"

  type?: string 

  constructor(private _offers: OffersService, private _store: Store<AppState>, private _ui: UiService, private _route: ActivatedRoute) {
    _store.subscribe(data => {
      this.user = data.account.user
    })
    _route.queryParams.subscribe(i => {
      if (i["type"]) this.type = i["type"]
      this.qDetails.define_type_of_request = this.type || ''
    })
  }

  ngOnInit(): void {
    this.requestToGetAllOffers()
  }

  offerToAcceptType() {
    return {...this.offer, user: this.offer?.user.id} as ICreateOffer
  }

  requestToGetAllOffers() {
    !this.offers && this._offers.getAllOffers().subscribe(
      (data) => {
        if (data.result && data.data.offers) {
          this.offers = data.data.offers
        } else {
          console.error(data.message)
        }
      },
      (error) => {
        this._ui.openWarning({"class": "error", "message": error.message})
        console.log(error)
      }
    )
  }

  getOffers() {
    console.log(this.offers?.length)
    return this.offers?.filter(i => i.is_archived === false)
  }

  getAllOffers() {
    return this.getOffers()?.filter(i => i.define_type_of_request == "offers")
  }

  getAllRequests() {
    return this.getOffers()?.filter(i => i.define_type_of_request == "requsts") || []
  }

  search(q: TQuery) {
    this._offers.filterOffers(q).subscribe(data => {
      if (data.data.offers) this.offers = data.data.offers
      else console.error(data.message)
    })
  }

  createOfferOpen(action?: "edit" | "create", offer?: IOffer) {
    this.action = action || "create"
    this.createOfferIsOpen = true
    this.offer = offer
  }

  createOfferClose() {
    this.createOfferIsOpen = false
    this.requestToGetAllOffers()
    this.offer = undefined
  }

  detailOfferClose() {
    this.detailOfferIsOpen = false
    this.offer = undefined
  }

  openDetail(offer: IOffer) {
    this.offer = offer
    this.detailOfferIsOpen = true
  }

  delete(id: number) {
    this._offers.delteOffer(id).subscribe(data => {
      if (data.result) {
        this._ui.openWarning({message: "Предложение удалено.", class: "ok"})
        this.offers = data.data.offers || []
      }
      else this._ui.openWarning({message: "Что-то пошло не так. Проверте данные и повторите попытку.", class: "error"})
    })
  }
}