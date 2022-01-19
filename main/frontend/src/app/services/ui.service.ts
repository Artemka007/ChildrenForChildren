import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { AppState } from '../business';
import { CloseWarningWindow, OpenWarningWindow } from '../business/actions/ui.actions';
import { Warning } from '../ui/warning-window/warning-window.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private _store: Store<AppState>
  ) { }

  openWarning(warning: Warning) {
    this._store.dispatch(new OpenWarningWindow(warning))
    interval(7000).subscribe(() => {this._store.dispatch(new CloseWarningWindow(warning))})
  }

  closeWarning(warning: Warning) {
    this._store.dispatch(new CloseWarningWindow(warning))
  }

  openBlackout() {
    let blackout = document.getElementById("blackout")
    if(blackout) {
      blackout.style.zIndex = '10'
      blackout.style.opacity = '1'
    }
  }

  closeBlackout() {
    let blackout = document.getElementById("blackout")
    if(blackout) {
      blackout.style.zIndex = '-1'
      blackout.style.opacity = '0'
    }
  }
}
