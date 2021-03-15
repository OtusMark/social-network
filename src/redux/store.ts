import {applyMiddleware, CombinedState, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer, profileStateType} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer, dialogsStateType} from "./dialogs-reducer";
import {UsersActionsType, usersReducer, UsersStateType} from "./users-reducer";
import {AuthActionsType, authReducer, AuthStateType} from "./auth-reducer";
import ThunkMiddleware from "redux-thunk"
import {AppActionsType, appReducer, AppStateType} from "./app-reducer";

export type CombinedActionsType =
    DialogsActionsType | ProfileActionsType | UsersActionsType | AuthActionsType | AppActionsType

export type DispatchType = (action: CombinedActionsType) =>  any

export type CombinedStateType = CombinedState<{
    profilePage: profileStateType
    dialogsPage: dialogsStateType
    usersPage: UsersStateType
    auth: AuthStateType
    app: AppStateType
}>

// Redux
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))