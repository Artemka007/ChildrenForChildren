import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrls: ['./reset-password-confirm.component.sass']
})
export class ResetPasswordConfirmComponent implements OnInit {
  warning?: {text: string, class: "ok" | ""}
  resetPasswordConfirmFormGroup = {
    new_password1: "",
    new_password2: "",
    uid: "",
    token: ""
  }
  isLoading: boolean = false
  result: boolean = false

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _account: AccountService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((p) => {
      this.resetPasswordConfirmFormGroup["uid"] = p["uid"]
      this.resetPasswordConfirmFormGroup["token"] = p["token"]
    })
  }

  resetPasswordConfirm() {
    this.isLoading = true
    this._account.resetPasswordConfirm(this.resetPasswordConfirmFormGroup).subscribe(data => {
      this.result = data.result
      this.isLoading = false
      if (data.result) {
        this.warning = {text: data.message, class: "ok"}
      } else {
        console.error(data.message)
      }
    })
  }
}
