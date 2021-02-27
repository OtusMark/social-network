import {applyMiddleware, CombinedState, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer, profileStateType} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer, dialogsStateType} from "./dialogs-reducer";
import {UsersActionsType, usersReducer, UsersStateType} from "./users-reducer";
import {AuthActionsType, authReducer, AuthStateType} from "./auth-reducer";
import ThunkMiddleware from "redux-thunk"


export type CombinedActionsType =
    DialogsActionsType | ProfileActionsType | UsersActionsType | AuthActionsType

export type DispatchType = (action: CombinedActionsType) => void

export type CombinedStateType = CombinedState<{
    profilePage: profileStateType
    dialogsPage: dialogsStateType
    usersPage: UsersStateType
    auth: AuthStateType
}>

// Redux
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))