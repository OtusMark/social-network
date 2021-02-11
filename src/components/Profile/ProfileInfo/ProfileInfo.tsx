import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";

type propsType = {
    profile: any
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

            </div>
        </div>
    )
}