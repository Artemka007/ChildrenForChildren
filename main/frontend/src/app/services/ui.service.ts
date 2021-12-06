import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
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
  }

  closeWarning(warning: Warning) {
    this._store.dispatch(new CloseWarningWindow(warning))
  }
}
