import {DispatchType} from "../store";
import {getAuthUserData} from "./auth-reducer";

export type AppStateType = typeof initialState

export type AppActionsType =
    ReturnType<typeof setAppAsInitialized>

const APP_IS_INITIALIZED = 'APP_IS_INITIALIZED'

let initialState = {
    initialized: false
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
export const initializeApp = () => (dispatch: DispatchType) => {
    // @ts-ignore
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(setAppAsInitialized())
        })
}