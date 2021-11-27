import { IChat } from "src/app/models/chat.model";
import { ChatsActions, ChatsUnion } from "../actions/chats.actions";

export interface ChatsState {
    chats: IChat[]
}

export const initialState: ChatsState = {
    chats: []
}
 
export function chatsReducer(state: ChatsState = initialState, action: ChatsUnion): ChatsState {
    switch (action.type) {
      case ChatsActions.SetUserChats:
        return {
          chats: action.chats,
        }
      default:
        return state
    }
}