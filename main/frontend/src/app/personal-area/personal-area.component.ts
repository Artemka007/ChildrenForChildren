import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { Profile, User } from '../models/user.model';
import { AccountService } from '../services/account.service';

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
    private _account: AccountService
  ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(p => {
      this._store.subscribe(data => {
        this.currentUser = data.account.user
      })
      if (p["id"]) {
        this._account.getUser({id: p["id"]}).subscribe(data => {
          if (data.result && data.data.user) {
            let {id, username, email, first_name, last_name, profile} = data.data.user
            let {patronymic, phone, age, status, user_in_school_status, city, country, about_me} = profile
            let p = new Profile(profile.id, profile.user, phone, patronymic, age, user_in_school_status, status, country, city, about_me)
            this.user = new User(id, username, email, first_name, last_name, p)
            console.log(this.user)
          }
        })
      } else {
        this._store.subscribe(data => {
          this.user = data.account.user
        })
      }
      console.log(p)
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
          console.log(data.message)
        } else {
          console.error(data.message)
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

}
