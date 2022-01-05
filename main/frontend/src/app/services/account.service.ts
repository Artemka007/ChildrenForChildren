import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../models/api.model';
import { IUser, User } from '../models/user.model';

export interface ILoginData {
  username: string
  password: string
}

export interface IRegisterData {
  username: string
  email: string
  first_name: string
  last_name: string
  phone: string
  patronymic: string
  age?: number
  status?: string
  user_in_school_status: "student" | "teacher" | "parent"
  country?: string
  city?: string
  about_me?: string
  social_networkws?: string
  district?: string
  password: string
  password2: string
}

export interface IEditProfileData extends IUser {}

export interface IResetPasswordData {
  email: string
}

export interface IResetPasswordConfirmData {
  new_password1: string
  new_password2: string
  uid: string
  token: string
}
export type SearchUserQuery = 
  | string 
  | {
    username?: string,
    first_name?: string,
    last_name?: string,
    country?: string,
    city?: string,
    bistrict?: string,
  }


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private _http: HttpClient
  ) { }

  getUser(query?: {id: number}) {
    let token = this._getCookie("csrftoken")
    return this._http.get<APIResponse<{user?: IUser}>>(`/api/v1/account/${query?.id ? "?id=" + query?.id : ""}`, {
      headers: {"X-CSRFToken": token}
    })
  }

  logout() {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse>("/api/v1/account/logout/", {csrfmiddlewaretoken: token}, {
      headers: {"X-CSRFToken": token}
    })
  }

  login(data: ILoginData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse<{user?: IUser}>>("/api/v1/account/login/", {...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  register(data: IRegisterData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse<{user?: IUser}>>("/api/v1/account/register/", {...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  editProfile(data: IEditProfileData) {
    let token = this._getCookie("csrftoken")
    return this._http.put<APIResponse<{errors?: [{[key: string]: string}]}>>("/api/v1/account/", {...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  resetPassword(data: IResetPasswordData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse>("/api/v1/account/password/reset/", {...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  resetPasswordConfirm(data: IResetPasswordConfirmData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse>(`/api/v1/account/password/reset/confirm/${data.uid}/${data.token}/`, {...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  searchUser(q: SearchUserQuery) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse<{users?: IUser[]}>>(`/api/v1/account/search/`, {q}, {
      headers: {"X-CSRFToken": token}
    })
  }

  uploadPhoto(fd: FormData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse<{user?: IUser}>>(`/api/v1/account/photo/upload/`, fd, {
      headers: {"X-CSRFToken": token}
    })
  }

  reportToUser(data: {who: number, why: string}) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse>(`/api/v1/account/report/`, data, {
      headers: {"X-CSRFToken": token}
    })
  }

  jsonToUser(data: {user?: IUser}) {
    if (data.user) {
      return new User(data.user)
    } else {
      return undefined
    }
  }

  private _getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;
    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
  }
}
