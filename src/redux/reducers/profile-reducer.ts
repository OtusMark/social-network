import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";
import {AppRootStateType} from "../store";
import {clearFormError, setFormError} from "./form-reducer";

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
const SET_EDIT_MODE = 'profile/SET_EDIT_MODE'

let initialState: profileStateType = {
    posts: [
        {id: 1, post: 'My first post', likes: 1},
        {id: 2, post: 'My second post', likes: 2},
        {id: 3, post: 'My third post', likes: 3},
        {id: 4, post: 'My fourth post', likes: 4},
        {id: 5, post: 'My fifth post', likes: 5}
    ],
    profile: null,
    profileEditModeOn: false,
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case SET_EDIT_MODE: {
            return {
                ...state,
                profileEditModeOn: action.editModeState
            }
        }
        default:
            return state
    }
}

// Action creators
export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)

export const setEditMode = (editModeState: boolean) => ({type: SET_EDIT_MODE, editModeState} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE, profile
} as const)

export const setStatus = (status: string) => ({
    type: SET_STATUS, status
} as const)

export const savePhotoSuccess = (photos: Array<HTMLImageElement>) => ({
    type: SAVE_PHOTO_SUCCESS, photos
} as const)

// Thunk creators
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {

    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getProfileStatus = (userId: number) => async (dispatch: Dispatch) => {

    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateProfileStatus = (newStatus: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(newStatus)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(newStatus))
    }
}

export const savePhoto = (file: HTMLImageElement) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profileData: ProfileType) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const userId = getState().auth.userId

    const response = await profileAPI.saveProfile(profileData)

    if (response.data.resultCode === 0) {
        dispatch(clearFormError())
        dispatch(setEditMode(false))
        // @ts-ignore
        dispatch(getUserProfile(userId))
    } else {
        dispatch(setEditMode(true))
        dispatch(setFormError(response.data.messages))
    }
}

// Types
export type PostType = {
    id: number
    post: string
    likes: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    photos: {
        small: string
        large: string
    }
    contacts: ProfileContactsType
}

export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
} & { [index: string]: any } // Defining index types

export type PostDataType = Array<PostType>

export type profileStateType = {
    posts: PostDataType
    profile: ProfileType | null
    status: string
    profileEditModeOn: boolean
}

export type ProfileActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof setEditMode>



