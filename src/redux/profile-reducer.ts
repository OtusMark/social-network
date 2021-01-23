export type PostType = {
    id: number
    post: string
    likes: number
}

export type PostDataType = Array<PostType>

export type profileStateType = {
    posts: PostDataType
    newPostText: string
}

export type ProfileActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: profileStateType = {
    posts: [
        {id: 1, post: 'My first post', likes: 1},
        {id: 2, post: 'My second post', likes: 2},
        {id: 3, post: 'My third post', likes: 3},
        {id: 4, post: 'My fourth post', likes: 4},
        {id: 5, post: 'My fifth post', likes: 5}
    ],
    newPostText: ''
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
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)

export const updateNewPostTextAC = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)
