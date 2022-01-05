import { Action, createAction, props } from '@ngrx/store';
import { IChat } from 'src/app/models/chat.model';

export enum ChatsActions {
    SetUserChats = '[Chats Page] Set User Chats',
}

export class SetUserChats implements Action {
    readonly type = ChatsActions.SetUserChats

    constructor(public chats: IChat[]) { }
}

export type ChatsUnion = SetUserChats