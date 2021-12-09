import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input()
  Content?: HTMLDivElement

  openLinks: CanOpenLinks[] | any = JSON.parse(localStorage.getItem("openLinks") || "[]")
  location = window.location
  hash: string = ""

  windowWidth: number = window.innerWidth

  isOpen: boolean = false

  constructor(private _router: Router) {
    _router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.location = window.location
        this.hash = window.location.hash
      }
    })
  }

  ngOnInit(): void {
    if (this.Content) {
      if(this.windowWidth < 1450) this.Content.style.marginLeft = "0"
    }
    window.onresize = e => {
      this.windowWidth = window.innerWidth
      if (this.Content){
        if(this.windowWidth < 1450) this.Content.style.marginLeft = "0"
        else this.Content.style.marginLeft = "320px"
      }
    }
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

  navbarIsOpen(): boolean {
    if (this.windowWidth > 1450) return true
    else return this.isOpen
  }

  setIsOpen() {
    this.isOpen = !this.isOpen
  }
}
