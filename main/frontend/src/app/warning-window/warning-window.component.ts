import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

export type Warning = {
  id?: number
  message: string
  class: "ok" | "error"
} | undefined

@Component({
  selector: 'warning',
  templateUrl: './warning-window.component.html',
  styleUrls: ['./warning-window.component.sass'],
  animations: [
    trigger('addWarning', [
      state('close', style({ top: "-1000px" })),
      state('open', style({ top: '100px' })),
      transition('close<=>open', animate('0.3s')),
    ]),
  ],
})
export class WarningWindowComponent implements OnInit {
  @Input()
  warning: Warning
  
  @HostBinding('@addWarning')

  state: "open" | "close" = "close"

  private _interval?: Subscription

  constructor(
    private _ui: UiService
  ) { }

  ngOnInit(): void {
    this.state = "open"
    this._interval = interval(7000).subscribe(() => {
      this.state = "close"
      interval(300).subscribe(() => {
        this._ui.closeWarning(this.warning)
        this._interval?.unsubscribe()
      })
    })
  }

  close() {
    this.state = "close"
    this._interval?.unsubscribe()
    this._interval = interval(300).subscribe(() => {
      this._ui.closeWarning(this.warning)
      this._interval?.unsubscribe()
    })
  }

}
