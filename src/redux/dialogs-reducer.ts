export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsDataType = Array<DialogsType>
export type MessagesDataType = Array<MessagesType>

export type dialogsStateType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageBody: string
}

export type DialogsActionsType =
    ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState: dialogsStateType = {
    dialogs: [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Issac'},
        {id: 4, name: 'Robert'},
        {id: 5, name: 'Arthur'}
    ],
    messages: [
        {id: 1, message: 'My name is Mark'},
        {id: 2, message: 'My name is Ivan'},
        {id: 3, message: 'My name is Issac'},
        {id: 4, message: 'My name is Robert'},
        {id: 5, message: 'My name is Arthur'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: dialogsStateType = initialState, action: DialogsActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newBody
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ''
            }
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newBody: text
} as const)