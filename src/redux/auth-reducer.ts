export type AuthStateType = typeof initialState

export type AuthActionsType =
    ReturnType<typeof setAuthUserData>

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {
        id,
        email,
        login
    }} as const)

