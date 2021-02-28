import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type propsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: propsType) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}