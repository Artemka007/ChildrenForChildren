import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../business';
import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.sass']
})
export class PersonalAreaComponent implements OnInit {
  user?: User
  isEditing: boolean = false

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _account: AccountService
  ) { }

  ngOnInit(): void {
    this._store.subscribe(data => {
      this.user = data.account.user
    })
  }

  startEdit() {
    this.isEditing = true
  }

  endEdit(ok: boolean) {
    if (ok && this.user) {
      let {id, username, email, firstName, lastName, profile} = this.user
      let {userId, patronymic, phone, age, status, user_in_school_status, city, country, about_me} = profile
      let itogUser = {
        id, 
        username, 
        email, 
        first_name: firstName, 
        last_name: lastName, 
        profile: {
          id: profile.id,
          user: userId,
          patronymic,
          phone,
          age,
          status,
          user_in_school_status,
          city,
          country,
          about_me
        }
      }
      this._account.editProfile(itogUser).subscribe(data => {
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

}
