import {applyMiddleware, CombinedState, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer, profileStateType} from "./reducers/profile-reducer";
import {DialogsActionsType, dialogsReducer, dialogsStateType} from "./reducers/dialogs-reducer";
import {UsersActionsType, usersReducer, UsersStateType} from "./reducers/users-reducer";
import {AuthActionsType, authReducer, AuthStateType} from "./reducers/auth-reducer";
import ThunkMiddleware from "redux-thunk"
import {AppActionsType, appReducer, AppStateType} from "./reducers/app-reducer";
import {FormActionsType, formReducer, FormStateType} from "./reducers/form-reducer";

export type CombinedActionsType =
    DialogsActionsType | ProfileActionsType | UsersActionsType | AuthActionsType | AppActionsType | FormActionsType

export type DispatchType = (action: CombinedActionsType) =>  any

export type AppRootStateType = CombinedState<{
    profilePage: profileStateType
    dialogsPage: dialogsStateType
    usersPage: UsersStateType
    auth: AuthStateType
    app: AppStateType
    form: FormStateType
}>

// Redux
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))