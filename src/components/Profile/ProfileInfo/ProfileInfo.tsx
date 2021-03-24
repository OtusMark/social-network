import React, {ChangeEventHandler} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import userAvatarDefault from "../../../assets/images/avatar-default.png";

type propsType = {
    isOwner: boolean
    profile: any
    status: string
    updateStatus: (status: string) => void
    savePhoto: any
}

export const ProfileInfo = (props: propsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userAvatarDefault} alt=""/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}