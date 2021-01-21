import React from 'react';

import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let postChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={postChange}/>)
}