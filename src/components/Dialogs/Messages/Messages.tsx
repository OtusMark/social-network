import React from "react";
import {MessagesType} from "../../../redux/dialogs-reducer";

type MessagePropsType = MessagesType;

export const Messages: React.FC<MessagePropsType> = (props) => {

    return (
        <div>
            {props.message}
        </div>
    )
}