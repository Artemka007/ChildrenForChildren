import { AccountActions, AccountUnion } from '../actions/account.actions';
import { User } from '../../models/user.model'; 

export interface AccountState {
    user?: User
}

export const initialState: AccountState = {
    user: undefined
}
 
export function accountReducer(state: AccountState = initialState, action: AccountUnion): AccountState {
  switch (action.type) {
    case AccountActions.SetUser:
      return {
        user: action.user,
      }
    default:
      return state
  }
}
  