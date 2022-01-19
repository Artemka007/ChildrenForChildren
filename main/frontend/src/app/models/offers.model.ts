import { IUser } from "./user.model";

export interface IBaseOffer {
    id?: number
    define_type_of_request: 'offers' | 'requsts' | 'quastions'
    title: string
    about: string
    back: string
    subject: {id: number, name: string}
}

export interface IOffer extends IBaseOffer {
    user: IUser
    chat?: number
    views_amoun: number
    is_archived: boolean
}

export interface ICreateOffer extends IBaseOffer {
    user: number
    create_group_chat: boolean
}
