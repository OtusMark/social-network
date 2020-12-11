const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

//--Types
type dialogsType = {
    id: number;
    name: string;
}

type messagesType = {
    id: number;
    message: string;
}
//Types--

export type dialogsStateType = {
    dialogs: Array<dialogsType>;
    messages: Array<messagesType>;
    newMessageBody: string;
};

let initialState: dialogsStateType = {
    dialogs: [
        {id: 1, name: 'Name_1'},
        {id: 2, name: 'Name_2'},
        {id: 3, name: 'Name_3'},
        {id: 4, name: 'Name_4'},
        {id: 5, name: 'Name_5'},
        {id: 6, name: 'Name_6'}
    ],
    messages: [
        {id: 1, message: 'message_1'},
        {id: 2, message: 'message_2'},
        {id: 3, message: 'message_3'},
        {id: 4, message: 'message_4'},
        {id: 5, message: 'message_5'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state: dialogsStateType = initialState, action: any): dialogsStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;