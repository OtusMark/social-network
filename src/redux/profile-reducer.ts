const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type postsType = {
    id: number;
    message: string;
    likesCount: number;
}

type addPostActionCreatorActionType = {
    type: typeof ADD_POST;
};

type updateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newText: string;
};

export type profileStateType = {
    posts: Array<postsType>;
    newPostText: string;
};

let initialState: profileStateType = {
    posts: [
        {id: 1, message: 'It\'s time to kick ass and chew bubble gum. And I\'m all out of gum.', likesCount: 666},
        {id: 2, message: 'I\'ll rip your head off and shit down your neck!', likesCount: 69},
        {id: 3, message: 'Your face. Your ass. What\'s the difference?', likesCount: 13},
        {id: 4, message: 'What are you waiting for? Christmas?', likesCount: 300}
    ],
    newPostText: 'Say some shit!'
};

const profileReducer = (state: profileStateType = initialState, action: any): profileStateType => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (): addPostActionCreatorActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): updateNewPostTextActionCreatorType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;