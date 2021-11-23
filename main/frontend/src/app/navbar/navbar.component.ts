import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

type CanOpenLinks =
  | "home"
  | "news"
  | "ads"
  | "chats"

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  openLinks: CanOpenLinks[] | any = JSON.parse(localStorage.getItem("openLinks") || "[]")
  location = window.location
  hash: string = ""

  constructor(private _router: Router) {
    _router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.location = window.location
        this.hash = window.location.hash
      }
    })
  }

  ngOnInit(): void {
  }

  openLink(n: CanOpenLinks) {
    let ol = JSON.parse(localStorage.getItem("openLinks") || "[]")
    ol ? localStorage.setItem("openLinks", JSON.stringify([...ol, n])) : localStorage.setItem("openLinks", JSON.stringify([n]))
    this.openLinks = JSON.parse(localStorage.getItem("openLinks") || "[]")
  }

  closeLink(n: CanOpenLinks) {
    let ol = JSON.parse(localStorage.getItem("openLinks") || "[]")
    if (ol) {
      let olCopy = [...ol]
      olCopy.splice(olCopy.indexOf(n), 1)
      localStorage.setItem("openLinks", JSON.stringify(olCopy))
    } else {
      throw new Error("Open links is undefined")
    }
    this.openLinks = JSON.parse(localStorage.getItem("openLinks") || "[]")
  }

  checkLinkIsOpen(n: CanOpenLinks) {
    return this.openLinks.indexOf(n) !== -1
  }

}
