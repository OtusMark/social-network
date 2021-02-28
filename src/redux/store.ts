import {applyMiddleware, CombinedState, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer, profileStateType} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer, dialogsStateType} from "./dialogs-reducer";
import {UsersActionsType, usersReducer, UsersStateType} from "./users-reducer";
import {AuthActionsType, authReducer, AuthStateType} from "./auth-reducer";
import ThunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

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
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))