import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dialog',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.sass']
})
export class DialogWindowComponent implements OnInit {
  @Input()
  content?: HTMLDivElement

  constructor() { }

  ngOnInit(): void {
  }

}
