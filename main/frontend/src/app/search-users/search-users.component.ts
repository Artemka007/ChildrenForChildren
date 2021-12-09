import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { AccountService, SearchUserQuery } from '../services/account.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.sass']
})
export class SearchUsersComponent implements OnInit {
  detailsIsOpen: boolean = false

  users: IUser[] = []

  q: string = ""
  qDetails = {
    username: "",
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    district: "",
  }

  constructor(private _account: AccountService) { }

  ngOnInit(): void {
    this.search("")
  }

  search(q: SearchUserQuery) {
    this._account.searchUser(q).subscribe(data => {
      if (data.data.users) this.users = data.data.users
      else console.error(data.message)
    })
  }

  getUserStatus(u: IUser) {
    let s = ""
    if(u.status) s = u.status
    else if(u.city && u.country) s = u.city + ", " + u.country
    else s = u.phone
    return s.substr(0, 100)
  }

}
