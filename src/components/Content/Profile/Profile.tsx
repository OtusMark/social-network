import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPostType, PostDataType, updateNewPostTextType} from "../../../redux/state";

type ProfilePropsType = {
    posts: PostDataType
    addPost: addPostType
    newPostText: string
    updateNewPostText: updateNewPostTextType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
        </div>
    )
}