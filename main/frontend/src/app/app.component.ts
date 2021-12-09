import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './business';
import { SetUser } from './business/actions/account.actions';
import { SetUserChats } from './business/actions/chats.actions';
import { User } from './models/user.model';
import { AccountService } from './services/account.service';
import { ChatService } from './services/chat.service';
import { Warning } from './ui/warning-window/warning-window.component';

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
    private _account: AccountService
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
      if (JSONUser) {
        let u = this._account.responseUserToUser(data.data)
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
