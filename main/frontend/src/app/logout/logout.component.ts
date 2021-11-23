import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { SetUser } from '../business/actions/account.actions';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private _accountService: AccountService, private _store: Store<AppState>, private _router: Router) {  }

  ngOnInit(): void {
    this._accountService.logout().subscribe((data) => {
      this._store.dispatch(new SetUser(undefined))
      this._router.navigateByUrl("login")
    })
  }

}
