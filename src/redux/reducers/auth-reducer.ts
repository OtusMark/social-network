import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {clearFormError, setFormError} from "./form-reducer";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

// Action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
} as const)

// Thunk creators
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.getMe()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(clearFormError())
                dispatch(getAuthUserData())
            } else {
                dispatch(setFormError(response.data.messages))
            }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(clearFormError())
                dispatch(setAuthUserData(null, null, null, false))
            }
}

// Types
export type AuthStateType = typeof initialState

export type AuthActionsType = ReturnType<typeof setAuthUserData>