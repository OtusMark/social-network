import {CombinedState, combineReducers, createStore, Store} from "redux";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";

export type StateType = CombinedState<{
    profilePage: profileStateType
    dialogsPage: dialogsStateType
}>

export type StoreType = Store<StateType>
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

export type dialogsStateType = {
    dialogs: DialogsDataType
    messages: MessagesDataType
    newMessageBody: string
}

// export type RerenderEntireTreeType = (state: StateType) => void
// export type SubscribeType = (observer: RerenderEntireTreeType) => void



export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type DispatchType = (action: ActionsType) => void

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(reducers)