import {authAPI} from "../api/api";
import {DispatchType} from "./store";

export type AuthStateType = typeof initialState

export type AuthActionsType =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setAuthError> |
    ReturnType<typeof clearAuthError>

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authError: {
        status: false,
        messages: []
    }

}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                ...state.authError,
                authError: {
                    status: true,
                    messages: action.errorMessages
                }
            }
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                ...state.authError,
                authError: {
                    status: false,
                    messages: []
                }
            }
        default:
            return state
    }
}

// Action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
} as const)

export const setAuthError = (errorMessages: Array<string>) => ({type: SET_AUTH_ERROR, errorMessages} as const)

export const clearAuthError = () => ({type: CLEAR_AUTH_ERROR} as const)

// Thunk creators
export const getAuthUserData = () => (dispatch: DispatchType) => {
    return authAPI.getMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: DispatchType) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(clearAuthError())
                // @ts-ignore
                dispatch(getAuthUserData())
            } else {
                dispatch(setAuthError(response.data.messages))
                console.log(response.data.messages)
            }
        })
}

export const logout = () => (dispatch: DispatchType) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(clearAuthError())
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

