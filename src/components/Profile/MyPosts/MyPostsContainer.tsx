import React from 'react';

import {MyPosts} from "./MyPosts";
import {AppRootStateType, DispatchType} from "../../../redux/store";
import {addPost} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);