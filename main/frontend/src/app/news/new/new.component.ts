import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { INew } from 'src/app/models/news.model';

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {
  @Input()
  new?: INew

  constructor() { }

  ngOnInit(): void {
  }

}
