import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { AppState } from '../business';
import { IBaseOffer } from '../models/offers.model';
import { OffersService } from '../services/offers.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.sass']
})
export class CreateOfferComponent implements OnInit {
  @Output()
  onclose = new EventEmitter()

  warning?: string
  isLoading: boolean = false

  windowClass: "Close" | "" = ""

  offer: IBaseOffer = {
    define_type_of_request: 'offers',
    title: "",
    about: "",
    back: "",
    user: -1,
    is_published: true
  }

  constructor(
    private _store: Store<AppState>,
    private _offers: OffersService,
    private _ui: UiService
  ) {
    _store.subscribe(data => {
      this.offer.user = data.account.user?.id || -1
    })
  }

  ngOnInit() {
  }

  createOffer() {
    this.isLoading = true
    this._offers.createOffer(this.offer).subscribe(data => {
      if (data.result) this._ui.openWarning({message: "Предложение создано.", class: "ok"})
      else this._ui.openWarning({message: "Что-то пошло не так. Проверте данные и повторите попытку.", class: "error"})
      this.isLoading = false
    })
  }

  close() {
    this.windowClass = "Close"
    interval(250).subscribe(() => {this.onclose.emit()})
  }

}
