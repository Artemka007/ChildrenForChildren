import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { AccountService, IRegisterData } from '../services/account.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  warning?: string
  registerFormGroup: IRegisterData = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    patronymic: "",
    age: undefined,
    status: undefined,
    user_in_school_status: "student",
    country: undefined,
    city: undefined,
    about_me: undefined,
    password: "",
    password2: "",
  }
  isLoading: boolean = false
  user_in_school_status_options: Array<{key: "student" | "teacher" | "parent", value: string}> = [
    {key: "student", value: "Ученик"},
    {key: "teacher", value: "Учитель"},
    {key: "parent", value: "Родитель"},
  ]

  constructor(
    private _account: AccountService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.isLoading = true
    this._account.register(this.registerFormGroup).subscribe(data => {
      this.isLoading = false
      if (data.result) {
        this._router.navigateByUrl("login")
      } else {
        this.warning = data.message
      }
    })
  }
}
