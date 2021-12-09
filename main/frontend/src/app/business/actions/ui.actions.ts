import { Action } from "@ngrx/store";
import { Warning } from "src/app/ui/warning-window/warning-window.component";

export enum UIActions {
    OpenWarning = "[UI Page] Open Warning Window",
    CloseWarning = "[UI Page] Close Warning Window"
}

export class OpenWarningWindow implements Action {
    readonly type = UIActions.OpenWarning

    constructor(public message?: Warning) { }
}

export class CloseWarningWindow implements Action {
    readonly type = UIActions.CloseWarning

    constructor(public message?: Warning) { }
}

export type UIUnion = OpenWarningWindow | CloseWarningWindow