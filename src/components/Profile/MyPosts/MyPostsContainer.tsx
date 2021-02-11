import React from 'react';

import {MyPosts} from "./MyPosts";
import {DispatchType, CombinedStateType} from "../../../redux/store";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: CombinedStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);