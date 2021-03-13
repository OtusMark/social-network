import React from 'react';

import {MyPosts} from "./MyPosts";
import {CombinedStateType, DispatchType} from "../../../redux/store";
import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: CombinedStateType) => {
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