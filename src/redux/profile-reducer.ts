import {ActionsType, PostType, profileStateType} from "./store";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: profileStateType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 6,
                post: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)
