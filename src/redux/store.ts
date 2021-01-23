import {CombinedState, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer, profileStateType} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer, dialogsStateType} from "./dialogs-reducer";
import {UsersActionsType, usersReducer, UsersStateType} from "./users-reducer";


export type CombinedActionsType =
    DialogsActionsType | ProfileActionsType | UsersActionsType

export type DispatchType = (action: CombinedActionsType) => void

export type CombinedStateType = CombinedState<{
    profilePage: profileStateType
    dialogsPage: dialogsStateType
    usersPage: UsersStateType
}>

// Redux
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)