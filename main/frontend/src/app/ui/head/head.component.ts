import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../business';
import { User } from '../../models/user.model';

@Component({
  selector: 'headerbar',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {
  user?: User
  submenuIsOpen: boolean = false

  constructor(
    private _store: Store<AppState>
  ) {
    this._store.subscribe(data => {
      this.user = data.account.user
    })
  }

  ngOnInit(): void {
  }

  openS() {
    this.submenuIsOpen = true
  }

  closeS() {
    this.submenuIsOpen = false
  }

}
