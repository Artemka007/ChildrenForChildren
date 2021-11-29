import { IUser } from "./user.model"

export interface IChat {
    id: number

    photo: string
    title: string
    description: string
    about: string
    who_can_edit_chat: "everybody" | "admins_and_moders" | "admins"
    
    users: IUser[]
    moderators: number[]
    admins: number[]
    banned_list: number[]
    messages: IMessage[]

    is_group: boolean
    is_private: boolean
}

export interface IMessage {
    id: number

    user: IUser
    readers: number[]
    chat: number
    body: string
    date: string

    reply_to_message?: IMessage
    is_forwarded: boolean

    videos: {file: string}
    imgs: {file: string}
    docs: {file: string}
}

export interface ICreateChat {
    photo?: File | Blob
    title?: string
    about?: string
    who_can_edit_chat?: "everybody" | "moders_and_adnins" | "admins"
    
    users: number[]
    moderators: number[]
    admins: number[]

    is_group?: boolean
    is_private?: boolean
}

export interface IEditChat {
    photo?: File | Blob
    title?: string
    about?: string
    
    users: number[]
    moderators: number[]
    banned_list: number[]

    is_private: boolean
}

export interface ICreateMessage {
    user: number
    chat: number
    body: string

    reply_to_message?: IMessage
    is_forwarded?: boolean

    videos: number[]
    imgs: number[]
    docs: number[]
}