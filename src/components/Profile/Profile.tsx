import React, {ReactNode} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileStateType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: profileStateType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}