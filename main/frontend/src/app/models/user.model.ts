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
}

export class Profile {
  constructor(
    private _id: number,
    private _user: number,
    private _phone: string,
    private _patronymic: string,
    private _age: number,
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
}