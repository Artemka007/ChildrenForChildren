import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { UiService } from 'src/app/services/ui.service';
import { AccountService, IRegisterData } from '../../services/account.service';

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

  constructor(
    private _account: AccountService,
    private _router: Router,
    private _ui: UiService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.isLoading = true
    this._account.register(this.registerFormGroup).subscribe(data => {
      this.isLoading = false
      if (data.result) {
        this._ui.openWarning({"class": "ok", "message": data.message})
      } else {
        this.warning = data.message
        interval(10000).pipe(take(1)).subscribe(() => {
          this.warning = undefined
        })
      }
    })
  }
}
