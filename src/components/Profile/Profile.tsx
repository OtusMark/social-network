import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, setEditMode} from "../../redux/reducers/profile-reducer";
import {FormErrorType} from "../../redux/reducers/form-reducer";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    editMode: boolean
    updateStatus: (status: string) => void
    savePhoto: any
    saveProfile: any
    formError: FormErrorType
    setEditMode: (editModeState: boolean) => void
}

export const Profile: React.FC<PropsType> = (props) => {

    const {
        savePhoto,
        isOwner,
        profile,
        status,
        editMode,
        updateStatus,
        saveProfile,
        formError,
        setEditMode
    } = props

    return (
        <div>
            <ProfileInfo savePhoto={savePhoto}
                         isOwner={isOwner}
                         profile={profile}
                         status={status}
                         editMode={editMode}
                         updateStatus={updateStatus}
                         saveProfile={saveProfile}
                         formError={formError}
                         setEditMode={setEditMode}/>
            <MyPostsContainer/>
        </div>
    )
}