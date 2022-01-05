export interface IUser {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  patronymic: string
  phone: string
  age: number
  status?: string
  user_in_school_status?: "student" | "teacher" | "parent" | "admin" | "moderator"
  country?: string
  city?: string
  district?: string
  about_me?: string
  social_networks?: string
  photo?: string
  online_date: string
}

export class User {
  constructor(
    private _u: IUser
  ) { }

  get id() {
    return this._u.id
  }
  
  get username() {
    return this._u.username
  }

  set username(username: string) {
    this._u.username = username
  }

  get email() {
    return this._u.email
  }

  set email(email: string) {
    this._u.email = email
  }

  get firstName() {
    return this._u.first_name
  }

  set firstName(firstName: string) {
    this._u.first_name = firstName
  }

  get lastName() {
    return this._u.last_name
  }

  set lastName(lastName: string) {
    this._u.last_name = lastName
  }

  get fullName() {
    return this._u.first_name + " " + this._u.last_name
  }
  
  
  get phone() {
    return this._u.phone
  }

  set phone(phone: string) {
    this._u.phone = phone
  }

  get patronymic() {
    return this._u.patronymic
  }

  set patronymic(patronymic: string) {
    this._u.patronymic = patronymic
  }

  get age() {
    return this._u.age
  }

  set age(age: number) {
    this._u.age = age
  }

  get status() {
    return this._u.status
  }

  set status(status: string | undefined) {
    this._u.status = status
  }

  get user_in_school_status() {
    return this._u.user_in_school_status
  }
  
  set user_in_school_status(user_in_school_status: "student" | "teacher" | "parent" | "admin" | "moderator" | undefined) {
    this._u.user_in_school_status = user_in_school_status
  }

  get country() {
    return this._u.country
  }
  
  set country(country: string | undefined) {
    this._u.country = country
  }

  get city() {
    return this._u.city
  }
  
  set city(city: string | undefined) {
    this._u.city = city
  }

  get district() {
    return this._u.district
  }

  set district(district: string | undefined) {
    this._u.district = district
  }

  get about_me() {
    return this._u.about_me
  }
  
  set about_me(about_me: string | undefined) {
    this._u.about_me = about_me
  }

  get social_networkws() {
    return this._u.social_networks
  }

  set social_networkws(social: string | undefined) {
    this._u.social_networks = social
  }

  get photo() {
    return this._u.photo
  }
  
  set photo(photo: string | undefined) {
    this._u.about_me = photo
  }

  get onlineDate() {
    return this._u.online_date
  }
  toJSON(): IUser {
    return this._u
  }
}