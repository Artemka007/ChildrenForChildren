import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.sass']
})
export class HamburgerComponent implements OnInit {
  @Input()
  isOpen?: boolean = false

  @Output()
  onchange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.onchange.emit()
  }
}
