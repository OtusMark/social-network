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
}

export type DialogsActionsType = | ReturnType<typeof sendMessageAC>

export const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ]
}

export const dialogsReducer = (state: dialogsStateType = initialState, action: DialogsActionsType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: Math.random(), message: action.message}],
            }
        default:
            return state
    }
}

export const sendMessageAC = (message: string) => ({type: SEND_MESSAGE , message} as const)