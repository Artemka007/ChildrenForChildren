import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../models/api.model';
import { IUser } from '../models/user.model';

export interface ILoginData {
  username: string
  password: string
}

export interface IRegisterData {
  username: string
  email: string
  first_name: string
  last_name: string
  password: string
  password2: string
  profile: {
    phone: string
    patronymic: string
    age?: number
    status?: string
    user_in_school_status: "student" | "teacher" | "parent"
    country?: string
    city?: string
    about_me?: string
  }
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

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private _http: HttpClient
  ) { }

  getUser() {
    let token = this._getCookie("csrftoken")
    return this._http.get<APIResponse<{user?: IUser}>>("/api/v1/account/", {
      headers: {"XCSRF-Token": token}
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
    return this._http.post<APIResponse<{user?: IUser}>>("/api/v1/account/login/", {csrfmiddlewaretoken: token, ...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  register(data: IRegisterData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse<{user?: IUser}>>("/api/v1/account/register/", {csrfmiddlewaretoken: token, ...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  editProfile(data: IEditProfileData) {
    let token = this._getCookie("csrftoken")
    return this._http.put<APIResponse<{errors?: [{[key: string]: string}]}>>("/api/v1/account/", {csrfmiddlewaretoken: token, ...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  resetPassword(data: IResetPasswordData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse>("/api/v1/account/password/reset/", {csrfmiddlewaretoken: token, ...data}, {
      headers: {"X-CSRFToken": token}
    })
  }

  resetPasswordConfirm(data: IResetPasswordConfirmData) {
    let token = this._getCookie("csrftoken")
    return this._http.post<APIResponse>(`/api/v1/account/password/reset/confirm/${data.uid}/${data.token}/`, {csrfmiddlewaretoken: token, ...data}, {
      headers: {"X-CSRFToken": token}
    })
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
