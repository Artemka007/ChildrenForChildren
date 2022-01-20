import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cfc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {
  @Input()
  r: number = 50

  constructor() { }

  ngOnInit(): void {
  }

  get strokeWidth() {
    return this.r/10
  }

  get size() {
    return this.r*2+this.strokeWidth
  }

}
