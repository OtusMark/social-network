import React from "react";
import {MessagesType} from "../../../../redux/state";

type MessagePropsType = MessagesType;

export const Messages: React.FC<MessagePropsType> = (props) => {

    return (
        <div>
            {props.message}
        </div>
    )
}