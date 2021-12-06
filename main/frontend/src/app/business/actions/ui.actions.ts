import { Action } from "@ngrx/store";
import { Warning } from "src/app/warning-window/warning-window.component";

export enum UIActions {
    OpenDialog = "[UI Page] Open Dialog Window",
    OpenWarning = "[UI Page] Open Warning Window"
}

export class OpenDialogWindow implements Action {
    readonly type = UIActions.OpenDialog

    constructor(public content?: HTMLDivElement) { }
}

export class OpenWarningWindow implements Action {
    readonly type = UIActions.OpenWarning

    constructor(public message?: Warning) { }
}

export type UIUnion = OpenDialogWindow | OpenWarningWindow