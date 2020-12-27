import React from "react";
import s from "./DialogsItem.module.scss";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../Dialogs";

type DialogItemProps = DialogsType;

export const DialogsItem: React.FC<DialogItemProps> = (props) => {

    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}