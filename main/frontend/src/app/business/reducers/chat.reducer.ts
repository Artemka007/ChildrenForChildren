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
      case ChatsActions.SetUserChats: {
        return {
          chats: action.chats,
        }
      }

      case ChatsActions.SendMessage: {
        let chats = [...state.chats]
        let chat = chats.find(i => i.id === action.chat)
        if (!chat) {
          throw new Error(`Чат с идентификатором ${action.chat} не найден.`)
        }
        let chatId = chats.indexOf(chat)
        let chatCopy = {...chat}
        chatCopy.messages = [action.message, ...chatCopy.messages]
        chats.splice(chatId, 1, chatCopy)
        return {
          chats
        }
      }

      case ChatsActions.ReadMessages: {
        let chats = [...state.chats]
        let chat = chats.find(i => i.id === action.chat)
        if (!chat) {
          throw new Error(`Чат с идентификатором ${action.chat} не найден.`)
        }
        let chatId = chats.indexOf(chat)
        let chatCopy = {...chat}
        chat.messages = chat.messages.map(i => {
          i.readers.push(action.user)
          return i
        })
        return {
          chats
        }
      }

      default:
        return state
    }
}
