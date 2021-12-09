import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../business';
import { User } from '../../models/user.model';
import { AccountService } from '../../services/account.service';
import { ChatService } from '../../services/chat.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.sass']
})
export class PersonalAreaComponent implements OnInit {
  user?: User
  currentUser?: User
  isEditing: boolean = false

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<AppState>,
    private _account: AccountService,
    private _ui: UiService,
    private _chat: ChatService
  ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(p => {
      this._store.subscribe(data => {
        this.currentUser = data.account.user
      })
        this._account.getUser({id: p["id"]}).subscribe(data => {
          if (data.result && data.data.user) {
            this.user = this._account.responseUserToUser(data.data)
          }
        })
    })
  }

  startEdit() {
    if (this.checkUser()) this.isEditing = true
  }

  endEdit(ok: boolean) {
    if (ok && this.user && this.checkUser()) {
      let user = this.user.toJSON()
      this._account.editProfile(user).subscribe(data => {
        if (data.result) {
          this._ui.openWarning({message: data.message, class: "ok"})
        } else {
          this._ui.openWarning({message: data.message, class: "error"})
        }
      })
    } 
    this.isEditing = false
  }

  checkUserInSchoolStatus(status: "student" | "admin" | "teacher" | "parent" | "moderator") {
    if (status === "student") return "Ученик"
    else if (status === "admin") return "Админ"
    else if (status === "teacher") return "Учитель"
    else if (status === "parent") return "Родитель"
    else if (status === "moderator") return "Модератор"
    else return ""
  }

  checkUser() {
    return this.user?.id === this.currentUser?.id
  }

  logout() {
    this._account.logout().subscribe(data => {
      if (data.result) this._router.navigateByUrl("/login")
    })
  }

  goToChat() {
    this._chat.getMutualChat(this.user?.id, this.currentUser?.id)
  }

}
