import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'cfc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) {
    _router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        let elID = e.url.split("#")[1]
        let el = document.getElementById(elID)
        if(el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
