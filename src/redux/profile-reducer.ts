import {DispatchType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number
    post: string
    likes: number
}

export type PostDataType = Array<PostType>

export type profileStateType = {
    posts: PostDataType
    newPostText: string
    profile: {} | null
    status: string
}

export type ProfileActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

let initialState: profileStateType = {
    posts: [
        {id: 1, post: 'My first post', likes: 1},
        {id: 2, post: 'My second post', likes: 2},
        {id: 3, post: 'My third post', likes: 3},
        {id: 4, post: 'My fourth post', likes: 4},
        {id: 5, post: 'My fifth post', likes: 5}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state: profileStateType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 6,
                post: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
}

// Action creators
export const addPost = () => ({type: ADD_POST} as const)

export const updateNewPostText = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE, profile
} as const)

export const setStatus = (status: string) => ( {
    type: SET_STATUS, status
} as const )

// Thunk creators
export const getUserProfile = (userId: number) => (dispatch: DispatchType) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getProfileStatus = (userId: number) => (dispatch: DispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateProfileStatus = (newStatus: string) => (dispatch: DispatchType) => {
    profileAPI.updateStatus(newStatus)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(newStatus))
            }
        })
}



