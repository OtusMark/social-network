import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileStateType} from "../../redux/reducers/profile-reducer";

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