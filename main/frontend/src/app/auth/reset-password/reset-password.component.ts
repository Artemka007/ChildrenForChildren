import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordFormGroup = {
    email: ''
  }
  warning?: {text: string, class: "ok" | ""}
  isLoading: boolean = false

  constructor(private _account: AccountService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.isLoading = true
    this._account.resetPassword(this.resetPasswordFormGroup).subscribe(data => {
      this.isLoading = false
      if (data.result) {
        this.warning = {text: data.message, class: "ok"}
      } else {
        this.warning = {text: data.message, class: ""}
      }
    })
  }

}
