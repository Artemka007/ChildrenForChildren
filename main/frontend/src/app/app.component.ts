import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './business';
import { SetUser } from './business/actions/account.actions';
import { SetUserChats } from './business/actions/chats.actions';
import { IChat } from './models/chat.model';
import { Profile, User } from './models/user.model';
import { AccountService } from './services/account.service';
import { ChatService, WSMessage } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';
import { Warning } from './warning-window/warning-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  user?: User

  warnings: Warning[] = []

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _accountService: AccountService,
    private _chatService: ChatService,
  ) {
    this._getUser()
    this._getChats()
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._getUser()
        this._getChats()
      }
    })
    this._store.subscribe(data => {
      this.user = data.account.user
      this.warnings = data.ui.warningMessages
    })
  }

  ngOnInit() {
  }

  private _getUser() {
    this._accountService.getUser().subscribe(data => {
      let JSONUser = data.data.user
      if (!JSONUser) {
        let path = location.pathname.split("/")[1]
        if (location.pathname === "/" || path === "home" || path === "news" || path === "events" || path === "chats" || path === "chat" || path === "profile") {
          console.log(location.pathname.split("/")[1])
          this._router.navigateByUrl("login")
        }
      }
      else {
        let {id, username, email, first_name, last_name, profile} = JSONUser
        let {user, patronymic, age, phone, user_in_school_status, status, country, city, about_me} = profile
        let p = new Profile(profile.id, user, phone, patronymic, age, user_in_school_status, status, country, city, about_me)
        let u = new User(id, username, email, first_name, last_name, p)
        this._store.dispatch(new SetUser(u))
        this.user = u
        if (location.pathname === "/") {
          this._router.navigateByUrl("home")
        } 
      }
    })
  }

  private _getChats() {
    this._chatService.getUserChats().subscribe(data => {
      if (data.result && data.data.chats) {
        this._store.dispatch(new SetUserChats(data.data.chats))
      } else {
        console.error(data.message)
      }
    })
  }
}
