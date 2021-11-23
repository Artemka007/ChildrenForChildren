import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './business';
import { SetUser } from './business/actions/account.actions';
import { Profile, User } from './models/user.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  user?: User

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _accountService: AccountService
  ) {
    this._getUser()
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._getUser()
      }
    })
    this._store.subscribe(data => {
      this.user = data.account.user
    })
  }

  ngOnInit() {
  }

  private _getUser() {
    this._accountService.getUser().subscribe(data => {
      let JSONUser = data.data.user
      if (!JSONUser) {
        let path = location.pathname.split("/")[1]
        if (path === "home" || path === "news" || path === "events" || path === "chats" || path === "chat") {
          console.log(location.pathname.split("/")[1])
          this._router.navigateByUrl("login")
        }
      }
      
      else {
        let {id, username, email, first_name, last_name, profile} = JSONUser
        let {user, patronymic, age, phone} = profile
        let p = new Profile(profile.id, user, phone, patronymic, age)
        let u = new User(id, username, email, first_name, last_name, p)
        this._store.dispatch(new SetUser(u))
        this.user = u
        if (location.pathname === "/") {
          this._router.navigateByUrl("home")
        } 
      }
    })
  }
}
