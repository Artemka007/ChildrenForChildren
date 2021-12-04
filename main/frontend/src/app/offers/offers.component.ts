import { Component, OnInit } from '@angular/core';

export type TQuery = string | {}

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {
  detailsIsOpen: boolean = false
  q: string = ""
  qDetails: TQuery = {}

  constructor() { }

  ngOnInit(): void {
  }

  search(q: string | object) {

  }
}
