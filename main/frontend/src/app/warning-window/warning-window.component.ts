import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
      state('close', style({ top: "-100px" })),
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

  constructor(
    private _ui: UiService
  ) { }

  ngOnInit(): void {
    this.state = "open"
  }

  close() {
    this.state = "close"
    this._ui.closeWarning(this.warning)
  }

}
