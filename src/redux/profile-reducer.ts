import {ActionsType, PostType, profileStateType} from "./store";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, post: 'My first post', likes: 1},
        {id: 2, post: 'My second post', likes: 2},
        {id: 3, post: 'My third post', likes: 3},
        {id: 4, post: 'My fourth post', likes: 4},
        {id: 5, post: 'My fifth post', likes: 5}
    ],
    newPostText: ''
}

export const profileReducer = (state: profileStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 6,
                post: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push (newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)
