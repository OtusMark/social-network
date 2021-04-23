import React from "react";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/reducers/dialogs-reducer";

type DialogItemProps = DialogsType;

export const DialogsItem: React.FC<DialogItemProps> = (props) => {

    let path = `/dialogs/${props.id}`;

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}