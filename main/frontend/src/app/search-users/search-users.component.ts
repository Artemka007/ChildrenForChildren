import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { AccountService, SearchUserQuery } from '../services/account.service';

@Component({
  selector: 'search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.sass']
})
export class SearchUsersComponent implements OnInit {
  @Output()
  onuserselect = new EventEmitter()

  @Input()
  isDialog: boolean = false

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

  constructor(private _account: AccountService, private _router: Router) { }

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

  select(id: number) {
    this.isDialog ? this.onuserselect.emit(id) : this._router.navigateByUrl("/profile?id="+id)
  }

}
