import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileStateType} from "../../redux/reducers/profile-reducer";

type PropsType = {
    isOwner: boolean
    profile: profileStateType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: any
}

export const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}