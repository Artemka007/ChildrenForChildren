import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _store: Store<AppState>,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log()
    let user = this._store.subscribe(data => {
      return data.account.user
    })
    if (!!this._store.subscribe(data => {
      return data.account.user
    })) {
      return true
    } else {
      this._router.navigateByUrl("/login")
      return false
    }
  }
  
}
