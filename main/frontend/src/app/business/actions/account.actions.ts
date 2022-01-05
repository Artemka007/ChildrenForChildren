import { Action, createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum AccountActions {
    SetUser = '[Account Page] Set User',
}

export class SetUser implements Action {
    readonly type = AccountActions.SetUser

    constructor(public user?: User) { }
}

export type AccountUnion = SetUser