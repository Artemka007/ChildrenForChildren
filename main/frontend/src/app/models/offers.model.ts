import { IUser } from "./user.model";

export interface IBaseOffer {
    id?: number
    define_type_of_request: 'offers' | 'requsts' | 'quastions'
    title: string
    about: string
    back: string
    subject: {id: number, name: string}
    is_published: boolean
}

export interface IOffer extends IBaseOffer {
    user: IUser
    views_amoun: number
}

export interface ICreateOffer extends IBaseOffer {
    user: number
}