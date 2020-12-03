const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'It\'s time to kick ass and chew bubble gum. And I\'m all out of gum.', likesCount: 666},
        {id: 2, message: 'I\'ll rip your head off and shit down your neck!', likesCount: 69},
        {id: 3, message: 'Your face. Your ass. What\'s the difference?', likesCount: 13},
        {id: 4, message: 'What are you waiting for? Christmas?', likesCount: 300}
    ],
    newPostText: 'Say some shit!'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;