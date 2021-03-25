const SET_FORM_ERROR = 'auth/SET_FORM_ERROR'
const CLEAR_FORM_ERROR = 'auth/CLEAR_FORM_ERROR'

let initialState = {
    error: {
        status: false,
        messages: []
    }
}

export const formReducer = (state: FormStateType = initialState, action: FormActionsType) => {

    switch (action.type) {

        case SET_FORM_ERROR:
            return {
                ...state,
                ...state.error,
                error: {
                    status: true,
                    messages: action.errorMessages
                }
            }
        case CLEAR_FORM_ERROR:
            return {
                ...state,
                ...state.error,
                error: {
                    status: false,
                    messages: []
                }
            }
        default:
            return state
    }
}

// Action creators

export const setFormError = (errorMessages: Array<string>) => ({type: SET_FORM_ERROR, errorMessages} as const)

export const clearFormError = () => ({type: CLEAR_FORM_ERROR} as const)

// Types
export type FormStateType = typeof initialState

export type FormErrorType = { status: boolean, messages: Array<string> }

export type FormActionsType =
    ReturnType<typeof setFormError> |
    ReturnType<typeof clearFormError>