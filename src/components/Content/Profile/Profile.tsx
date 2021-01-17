import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostDataType } from "../../../redux/store";

type ProfilePropsType = {
    posts: PostDataType
    newPostText: string
    dispatch: DispatchType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </div>
    )
}