import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { AppState } from '../business';
import { CloseWarningWindow, OpenWarningWindow } from '../business/actions/ui.actions';
import { Warning } from '../warning-window/warning-window.component';

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
}
