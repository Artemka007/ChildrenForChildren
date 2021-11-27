import { ActionReducerMap } from '@ngrx/store'
import { accountReducer, AccountState } from './reducers/account.reducer'
import { chatsReducer, ChatsState } from './reducers/chat.reducer'

export const rootReducer = {}

export interface AppState {
  account: AccountState
  chats: ChatsState
}

export const reducers: ActionReducerMap<AppState, any> = {
  account: accountReducer,
  chats: chatsReducer,
}