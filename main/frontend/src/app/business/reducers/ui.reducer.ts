import { Warning } from "src/app/warning-window/warning-window.component";
import { UIActions, UIUnion } from "../actions/ui.actions";

export interface UIState {
    warningMessages: Warning[]
    dialogContent?: HTMLDivElement
}

const initialState: UIState = {
    warningMessages: [],
    dialogContent: undefined
}

export function UIReducer(state: UIState = initialState, action: UIUnion) {
    switch (action.type) {
        case UIActions.OpenDialog: {
            let stateCopy = {...initialState}
            stateCopy.dialogContent = action.content
            return stateCopy
        }

        case UIActions.OpenWarning: {
            let stateCopy = {...initialState}
            if (action.message){
                let messageCopy = {...action.message}
                messageCopy.id = stateCopy.warningMessages.length
                stateCopy.warningMessages.push(messageCopy)
            }
            return stateCopy
        }

        default: 
            return initialState
    } 
}