import {getAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";

const APP_IS_INITIALIZED = 'app/APP_IS_INITIALIZED'

let initialState = {
    initialized: false,
    globalError: null
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType) => {

    switch (action.type) {
        case APP_IS_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

// Action creators
export const setAppAsInitialized = () => ({type: APP_IS_INITIALIZED} as const)

// Thunk creators
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(setAppAsInitialized())
        })
}

// Types
export type AppStateType = typeof initialState

export type AppActionsType =
    ReturnType<typeof setAppAsInitialized>