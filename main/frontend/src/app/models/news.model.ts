import { IUser } from "./user.model";

export interface INew {
    id: number
    user: IUser
    title: string
    body: string
    date: string
}