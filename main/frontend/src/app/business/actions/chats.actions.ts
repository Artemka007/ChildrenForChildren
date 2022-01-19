import { Action } from '@ngrx/store';
import { IChat, IMessage } from 'src/app/models/chat.model';

export enum ChatsActions {
    SetUserChats = '[Chats Page] Set User Chats',
    SendMessage = '[Chat Page] Send Message',
    ReadMessages = '[Chat Page] Read Messages'
}

export class SetUserChats implements Action {
    readonly type = ChatsActions.SetUserChats

    constructor(public chats: IChat[]) { }
}

export class SendMessage implements Action {
    readonly type = ChatsActions.SendMessage

    constructor(
      public chat: number,
      public message: IMessage
    ) { }
}

export class ReadMessages implements Action {
    readonly type = ChatsActions.ReadMessages

    constructor(
      public chat: number,
      public user: number
    ) { }
}

export type ChatsUnion = SetUserChats | SendMessage | ReadMessages
