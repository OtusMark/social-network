import React, {ReactNode} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileStateType} from "../../redux/profile-reducer";

type PropsType = {
    children?: ReactNode
    profile: profileStateType
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}