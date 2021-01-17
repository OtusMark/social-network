import {ActionsType, messagesStateType, MessagesType} from "./store";

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export const dialogsReducer = (state: messagesStateType, action: ActionsType) => {
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