import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import userAvatarDefault from "../../../assets/images/avatar-default.png";
import {ProfileType} from "../../../redux/reducers/profile-reducer";
import {ProfileDataForm} from "./ProfileDataForm";
import {FormErrorType} from "../../../redux/reducers/form-reducer";

type propsType = {
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

export const ProfileInfo: React.FC<propsType> = (props) => {

    const {
        isOwner,
        profile,
        status,
        editMode,
        updateStatus,
        savePhoto,
        saveProfile,
        formError,
        setEditMode
    } = props


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const editModeHandler = () => {
        setEditMode(true)
    }

    const onEditSubmitHandler = (formData: any) => {
        saveProfile(formData)
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large || userAvatarDefault} alt=""/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
            </div>

            {editMode ? <ProfileDataForm profile={profile} onEditSubmitHandler={onEditSubmitHandler} formError={formError}/> :
                <ProfileData profile={profile} isOwner={isOwner} goToEditMode={editModeHandler}/>}

            <div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <div>Full name {profile.fullName}</div>

            <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>

            {profile.lookingForAJob &&
            <div>My professional skills: {profile.lookingForAJobDescription}</div>}

            {Object.keys(profile.contacts).map((key: string) => {
                return (
                    <div key={key}>{key}: {profile.contacts[key]}</div>
                )
            })}
        </div>
    )
}