import { Component, OnInit } from '@angular/core';

export type Warning = {
  id?: number
  message: string
  class: "ok" | "error"
} | undefined

@Component({
  selector: 'app-warning-window',
  templateUrl: './warning-window.component.html',
  styleUrls: ['./warning-window.component.sass']
})
export class WarningWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
