import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { AccountService, IRegisterData } from '../services/account.service';

@Component({
  selector: 'app-register',
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
    password: "",
    password2: "",
    profile: {
      phone: "",
      patronymic: "",
      age: undefined,
    }
  }
  isLoading: boolean = false

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
