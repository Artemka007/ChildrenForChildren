import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { AppState } from '../business';
import { AccountService, ILoginData } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginFormGroup: ILoginData = {
    username: "",
    password: ""
  }
  warning?: string
  isLoading: boolean = false

  constructor(private _account: AccountService, private _router: Router, private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    this.isLoading = true
    this._account.login(form.value).subscribe(data => {
      this.isLoading = false
      if (data.data.user) {
        this._router.navigateByUrl("home")
      } else {
        this.warning = data.message
        interval(10000).subscribe(() => {
          this.warning = undefined
        })
      }
    })
  }

}
