import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../models/api.model';
import { IOffer } from '../models/offers.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private _http: HttpClient) { }

  getAllOffers() {
    // todo: when api will ready add return sub
    let sub = this._http.get<APIResponse<{offers?: IOffer[]}>>("/api/v1/offers/", {
      headers: {
        "X-CSRFToken": this._getCookie("csrftoken")
      }
    })
    return sub
  }

  createOffer(offer: IOffer) {

  }

  editOffer(id: number, newOffer: IOffer) {

  }

  delteOffer(id: number) {

  }

  filterOffers() {

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
