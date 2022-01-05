import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass']
})
export class ReportComponent implements OnInit {
  @Input()
  who?: number

  @Output()
  onclose = new EventEmitter()

  isLoading: boolean = false

  reportQuery = {
    why: ""
  }

  constructor(
    private _ui: UiService,
    private _account: AccountService,
  ) { }

  ngOnInit(): void {
  }

  report() {
    if (this.who) {
      this.isLoading = true
      this._account.reportToUser({who: this.who, why: this.reportQuery.why}).subscribe((data) => {
        this._ui.openWarning({message: data.message, class: data.result ? "ok" : "error"})
        this.isLoading = false
        this.close()
      })
    }
  }

  close() {
    this.onclose.emit()
  }
}
