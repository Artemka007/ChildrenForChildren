import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.sass']
})
export class AccountNavComponent implements OnInit {

  navItems = [
    {text: "Авторизация", to: "/login"},
    {text: "Регистрация", to: "/register"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
