import { ActionReducerMap } from '@ngrx/store'
import { accountReducer, AccountState } from './reducers/account.reducer'

export const rootReducer = {}

export interface AppState {
  account: AccountState
}

export const reducers: ActionReducerMap<AppState, any> = {
  account: accountReducer
}