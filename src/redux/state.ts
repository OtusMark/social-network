// Types
export type StoreType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: RerenderEntireTreeType;
    subscribe: SubscribeType
    dispatch: DispatchType
}

export type stateType = {
    profilePage: profileStateType
    dialogsPage: messagesStateType
}

export type PostType = {
    id: number
    post: string
    likes: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostDataType = Array<PostType>
export type DialogsDataType = Array<DialogsType>
export type MessagesDataType = Array<MessagesType>

export type profileStateType = {
    posts: PostDataType
    newPostText: string
}

export type messagesStateType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageBody: string
}

export type RerenderEntireTreeType = (state: stateType) => void
export type SubscribeType = (observer: RerenderEntireTreeType) => void

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

export type DispatchType = (action: ActionsTypes) => void

// Variables
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

// Store
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'My first post', likes: 1},
                {id: 2, post: 'My second post', likes: 2},
                {id: 3, post: 'My third post', likes: 3},
                {id: 4, post: 'My fourth post', likes: 4},
                {id: 5, post: 'My fifth post', likes: 5}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: stateType) {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 6,
                post: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newBody
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body: MessagesType = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push(body)
            this._callSubscriber(this._state)
        }
    }
}

// Action Creators
export const addPostAC = () => ({type: ADD_POST} as const)

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)

export const updateNewMessageBodyAC = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newBody: text
} as const)

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)
