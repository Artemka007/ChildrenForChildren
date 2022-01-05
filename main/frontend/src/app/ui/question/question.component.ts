import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { APIResponse } from 'src/app/models/api.model';
import { User } from 'src/app/models/user.model';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Output()
  onclose = new EventEmitter()

  @Input()
  user?: User

  isLoading: boolean = false
  message: string = ""

  constructor(private _http: HttpClient, private _ui: UiService) { }

  ngOnInit(): void {
  }

  close() {
    this.onclose.emit()
  }

  submit() {
    this._http.get<APIResponse>(`/api/v1/help/?message=${this.message}`).subscribe(data => {
      this._ui.openWarning({message: data.message, class: data.result ? "ok" : "error"})
    })
    this.onclose.emit()
  }

}
