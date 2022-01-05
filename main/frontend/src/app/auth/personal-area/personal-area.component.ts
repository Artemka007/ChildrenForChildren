import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IOffer } from 'src/app/models/offers.model';
import { OffersService } from 'src/app/services/offers.service';
import { AppState } from '../../business';
import { User } from '../../models/user.model';
import { AccountService } from '../../services/account.service';
import { ChatService } from '../../services/chat.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.sass']
})
export class PersonalAreaComponent implements OnInit {
  // current user view user profile
  user?: User
  currentUser?: User

  // flags
  isEditing: boolean = false

  // open dialogs
  reportIsOpen: boolean = false
  uploadImageIsOpen: boolean = false

  // url params
  id?: string
  tab: '' | 'contacts' | 'offers' = ''
  
  offers: IOffer[] = []

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<AppState>,
    private _account: AccountService,
    private _offer: OffersService,
    private _ui: UiService,
    private _chat: ChatService
  ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(p => {
      let tab = <typeof this.tab>p["tab"],
        id = p["id"]
      this.id = id
      if (tab === "offers") {
        this._offer.getAllOffers(this.user?.id).subscribe(data => {
          this.offers = data.data.offers || []
          this.tab = "offers"
        })
      }
      else if (tab === "contacts") {
        this.tab = "contacts"
      } else {
        this.tab = ""
      }
      this._store.subscribe(data => {
        this.currentUser = data.account.user
      })
        this._account.getUser({id: p["id"]}).subscribe(data => {
          if (data.result && data.data.user) {
            this.user = this._account.jsonToUser(data.data)
            console.log(data.data)
          }
        })
    })

  }

  setPhoto(fd: FormData) {
    this._account.uploadPhoto(fd).subscribe(
      data => {
        let u = data.data.user
        this.isEditing = false
        if (u) this.user = new User(u)
        else this._ui.openWarning({"class": "error", "message": data.message})
      },
      error => {
        this._ui.openWarning({"class": "error", "message": error.message})
      }
    )
  }

  navigateToPhoto() {
    this.user?.photo && this._router.navigateByUrl(this.user?.photo)
  }

  startEdit() {
    if (this.checkUser()) this.isEditing = true
  }

  endEdit(ok: boolean) {
    if (ok && this.user && this.checkUser()) {
      let user = this.user.toJSON()
      this._account.editProfile({...user, photo: undefined}).subscribe(data => {
        if (data.result) {
          this._ui.openWarning({message: data.message, class: "ok"})
        } else {
          this._ui.openWarning({message: data.message, class: "error"})
        }
      })
    } 
    this.isEditing = false
  }

  checkUserInSchoolStatus(status?: "student" | "admin" | "teacher" | "parent" | "moderator") {
    switch (status) {
      case "student": return "Ученик"
      case "admin": return "Админ"
      case "teacher": return "Учитель"
      case "parent": return "Родитель"
      case "moderator": return "Модератор"
      default: return ""
    }
  }

  checkUser() {
    return this.user?.id === this.currentUser?.id
  }

  logout() {
    this._account.logout().subscribe(data => {
      if (data.result) this._router.navigateByUrl("/login")
    })
  }

  goToChat() {
    this._chat.getMutualChat(this.user?.id, this.currentUser?.id)
  }

}