import React from "react";
import {MessagesType} from "../Dialogs";

type MessagePropsType = MessagesType;

export const Messages: React.FC<MessagePropsType> = (props) => {

    return (
        <div>
            {props.message}
        </div>
    )
}