export interface IUser {
  readonly id: number
  readonly username: string
  readonly email: string
  readonly first_name: string
  readonly last_name: string
  readonly profile: IProfile
}

export interface IProfile {
  readonly id: number
  readonly user: number
  readonly phone: string
  readonly patronymic: string
  readonly age: number
  readonly status?: string
  readonly user_in_school_status: "student" | "teacher" | "parent" | "admin" | "moderator"
  readonly country?: string
  readonly city?: string
  readonly district?: string
  readonly about_me?: string
}

export class User {
  constructor(
    private _id: number,
    private _username: string,
    private _email: string,
    private _first_name: string,
    private _last_name: string,
    private _profile: Profile
  ) { }

  get id() {
    return this._id
  }
  
  get username() {
    return this._username
  }

  set username(username: string) {
    this._username = username
  }

  get email() {
    return this._email
  }

  set email(email: string) {
    this._email = email
  }

  get firstName() {
    return this._first_name
  }

  set firstName(firstName: string) {
    this._first_name = firstName
  }

  get lastName() {
    return this._last_name
  }

  set lastName(lastName: string) {
    this._last_name = lastName
  }

  get fullName() {
    return this._first_name + " " + this._last_name
  }

  get profile() {
    return this._profile
  }

  set profile(profile: Profile) {
    this._profile = profile
  }

  toJSON(): IUser {
    let {id, username, email, firstName, lastName, profile} = this
    let {userId, patronymic, phone, age, status, user_in_school_status, city, country, about_me, district} = profile
    let JSONUser = {
      id, 
      username, 
      email, 
      first_name: firstName, 
      last_name: lastName, 
      profile: {
        id: profile.id,
        user: userId,
        patronymic,
        phone,
        age,
        status,
        user_in_school_status,
        city,
        country,
        about_me,
        district
      }
    }
    return JSONUser
  }
  copy() {
    return {...this}
  }
}

export class Profile {
  constructor(
    private _id: number,
    private _user: number,
    private _phone: string,
    private _patronymic: string,
    private _age: number,
    private _user_in_school_status: "student" | "teacher" | "parent" | "admin" | "moderator",
    private _status?: string,
    private _country?: string,
    private _city?: string,
    private _about_me?: string,
    private _district?: string
  ) { }
  get id() {
    return this._id
  }

  get userId() {
    return this._user
  }

  get phone() {
    return this._phone
  }

  set phone(phone: string) {
    this._phone = phone
  }

  get patronymic() {
    return this._patronymic
  }

  set patronymic(patronymic: string) {
    this._patronymic = patronymic
  }

  get age() {
    return this._age
  }

  set age(age: number) {
    this._age = age
  }

  get status() {
    return this._status
  }

  set status(status: string | undefined) {
    this._status = status
  }

  get user_in_school_status() {
    return this._user_in_school_status
  }
  
  set user_in_school_status(user_in_school_status: "student" | "teacher" | "parent" | "admin" | "moderator") {
    this._user_in_school_status = user_in_school_status
  }

  get country() {
    return this._country
  }
  
  set country(country: string | undefined) {
    this._country = country
  }

  get city() {
    return this._city
  }
  
  set city(city: string | undefined) {
    this._city = city
  }

  get district() {
    return this._district
  }

  set district(district: string | undefined) {
    this._district = district
  }

  get about_me() {
    return this._about_me
  }
  
  set about_me(about_me: string | undefined) {
    this._about_me = about_me
  }
}