import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../../business';
import { ICreateOffer } from '../../models/offers.model';
import { OffersService } from '../../services/offers.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'offer-action',
  templateUrl: './offer-action.component.html',
  styleUrls: ['./offer-action.component.sass']
})
export class OfferActionComponent implements OnInit {
  @Input()
  action?: "create" | "edit"

  @Output()
  onclose = new EventEmitter()

  warning?: string
  isLoading: boolean = false

  windowClass: "Close" | "" = ""
  @Input()
  windowTitle: string = ""

  @Input()
  offer: ICreateOffer = {
    define_type_of_request: 'offers',
    title: "",
    about: "",
    back: "",
    subject: {id: -1, name: ""},
    user: -1,
    create_group_chat: false
  }

  subjects: {id: number, name: string}[] = []

  constructor(
    private _store: Store<AppState>,
    private _offers: OffersService,
    private _ui: UiService
  ) {
    this._offers.getSubjects().subscribe(data => {
      this.subjects = data.data.subjects
    })
    _store.subscribe(data => {
      if(this.offer)this.offer.user = data.account.user?.id || -1
    })
  }

  ngOnInit() {
  }

  createOffer() {
    this.isLoading = true
    this.offer && this._offers.createOffer(this.offer).subscribe(
      data => {
        if (data.result) {
          this._ui.openWarning({message: "Предложение создано.", class: "ok"})
          this.close()
        }
        else this._ui.openWarning({message: "Что-то пошло не так. Проверте данные и повторите попытку.", class: "error"})
        this.isLoading = false
      },
      error => {
        this._ui.openWarning({"class": "error", "message": error.message})
        console.log(error)
      }
    )
  }

  updateOffer(form: NgForm) {
    const offer = <ICreateOffer>form.form.value
    this.isLoading = true
    offer && this._offers.editOffer(this.offer.id || -1, {...offer, user: this.offer.user}).subscribe(
      data => {
        if (data.result) {
          this._ui.openWarning({message: "Предложение отредактировано.", class: "ok"})
          this.close()
        }
        else this._ui.openWarning({message: "Что-то пошло не так. Проверте данные и повторите попытку.", class: "error"})
        this.isLoading = false
      },
      error => {
        this._ui.openWarning({"class": "error", "message": error.message})
        console.log(error)
      }
    )
  }

  close() {
    this.windowClass = "Close"
    interval(250).pipe(take(1)).subscribe(() => {this.onclose.emit()})
  }

}
