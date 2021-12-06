import { ActionReducerMap } from '@ngrx/store'
import { accountReducer, AccountState } from './reducers/account.reducer'
import { chatsReducer, ChatsState } from './reducers/chat.reducer'
import { UIReducer, UIState } from './reducers/ui.reducer'

export const rootReducer = {}

export interface AppState {
  account: AccountState
  chats: ChatsState
  ui: UIState
}

export const reducers: ActionReducerMap<AppState, any> = {
  account: accountReducer,
  chats: chatsReducer,
  ui: UIReducer
}