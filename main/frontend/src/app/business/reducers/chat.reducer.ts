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
        let chat = chats.find(i => i.id === (typeof action.chat === 'number' ? action.chat : parseInt(action.chat)))
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
        let chat = chats.find(i => i.id === (typeof action.chat === 'number' ? action.chat : parseInt(action.chat)))
        if (!chat) {
          throw new Error(`Чат с идентификатором ${action.chat} не найден.`)
        }
        let chatId = chats.indexOf(chat)
        let chatCopy = {...chat}
        chatCopy.messages = chat.messages.map(m => {
          let mCopy = {...m}
          mCopy.readers = [...mCopy.readers, action.user]
          return mCopy
        })
        chats.splice(chatId, 1, chatCopy)
        return {
          chats
        }
      }

      default:
        return state
    }
}
