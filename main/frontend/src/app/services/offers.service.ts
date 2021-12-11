import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../models/api.model';
import { IBaseOffer, IOffer } from '../models/offers.model';
import { TQuery } from '../offers/offers.component';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private _http: HttpClient) { }

  getAllOffers() {
    let sub = this._http.get<APIResponse<{offers?: IOffer[]}>>("/api/v1/offers/", {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }

  createOffer(offer: IBaseOffer) {
    let sub = this._http.post<APIResponse<{offers?: IOffer[]}>>("/api/v1/offers/", {...offer}, {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }

  editOffer(id: number, newOffer: IBaseOffer) {
    let sub = this._http.put<APIResponse<{offers?: IOffer[]}>>("/api/v1/offers/?id=" + id, {...newOffer}, {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }

  delteOffer(id: number) {
    let sub = this._http.delete<APIResponse<{offers?: IOffer[]}>>("/api/v1/offers/?id=" + id, {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }

  filterOffers(q: TQuery) {
    let sub = this._http.post<APIResponse<{offers?: IOffer[]}>>("/api/v1/offers/search/", {q}, {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }

  getSubjects() {
    let sub = this._http.get<APIResponse<{subjects: {id: number, name: string}[]}>>("/api/v1/offers/subjects/", {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }
  
  private _getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(';')
    let caLen: number = ca.length
    let cookieName = `${name}=`
    let c: string
    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '')
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length)
        }
    }
    return ''
  }
}
