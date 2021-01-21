import {ActionsType, dialogsStateType, MessagesType} from "./store";


export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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

export const dialogsReducer = (state: dialogsStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body: MessagesType = {
                id: 6,
                message: state.newMessageBody
            }
            state.newMessageBody = ''
            state.messages.push(body)
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newBody: text
} as const)