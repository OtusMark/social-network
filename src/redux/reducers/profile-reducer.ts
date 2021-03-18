import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'

let initialState: profileStateType = {
    posts: [
        {id: 1, post: 'My first post', likes: 1},
        {id: 2, post: 'My second post', likes: 2},
        {id: 3, post: 'My third post', likes: 3},
        {id: 4, post: 'My fourth post', likes: 4},
        {id: 5, post: 'My fifth post', likes: 5}
    ],
    profile: null,
    status: ''
}

// Reducer
export const profileReducer = (state: profileStateType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 6,
                    post: action.newPostText,
                    likes: 0
                }],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId),
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
export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE, profile
} as const)

export const setStatus = (status: string) => ({
    type: SET_STATUS, status
} as const)

// Thunk creators
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getProfileStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateProfileStatus = (newStatus: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(newStatus))
            }
        })
}

// Types
export type PostType = {
    id: number
    post: string
    likes: number
}

export type PostDataType = Array<PostType>

export type profileStateType = {
    posts: PostDataType
    profile: {} | null
    status: string
}

export type ProfileActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>



