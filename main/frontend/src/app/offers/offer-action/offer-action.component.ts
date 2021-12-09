import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../../business';
import { IBaseOffer, IOffer } from '../../models/offers.model';
import { OffersService } from '../../services/offers.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'offer-action',
  templateUrl: './offer-action.component.html',
  styleUrls: ['./offer-action.component.sass']
})
export class OfferActionComponent implements OnInit {
  @Input()
  action: "create" | "edit" = "create"

  @Output()
  onclose = new EventEmitter()

  warning?: string
  isLoading: boolean = false

  windowClass: "Close" | "" = ""
  @Input()
  windowTitle: string = ""

  @Input()
  offer: IOffer = {
    define_type_of_request: 'offers',
    title: "",
    about: "",
    back: "",
    user: -1,
    is_published: true,
    views_amoun: 0
  }

  constructor(
    private _store: Store<AppState>,
    private _offers: OffersService,
    private _ui: UiService
  ) {
    _store.subscribe(data => {
      if(this.offer)this.offer.user = data.account.user?.id || -1
    })
  }

  ngOnInit() {
  }

  createOffer() {
    this.isLoading = true
    this.offer && this._offers.createOffer(this.offer).subscribe(data => {
      if (data.result) {
        this._ui.openWarning({message: "Предложение создано.", class: "ok"})
        this.close()
      }
      else this._ui.openWarning({message: "Что-то пошло не так. Проверте данные и повторите попытку.", class: "error"})
      this.isLoading = false
    })
  }

  updateOffer() {
    this.isLoading = true
    this.offer && this._offers.editOffer(this.offer.id || -1, this.offer).subscribe(data => {
      if (data.result) {
        this._ui.openWarning({message: "Предложение создано.", class: "ok"})
        this.close()
      }
      else this._ui.openWarning({message: "Что-то пошло не так. Проверте данные и повторите попытку.", class: "error"})
      this.isLoading = false
    })
  }

  close() {
    this.windowClass = "Close"
    interval(250).pipe(take(1)).subscribe(() => {this.onclose.emit()})
  }

}
