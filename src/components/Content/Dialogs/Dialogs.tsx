import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {messagesStateType, profileStateType} from "../../../redux/state";

type DialogsPropsType = {
    messages: messagesStateType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messages.dialogs.map(dialogs => <DialogsItem id={dialogs.id} name={dialogs.name}/>)
    let messages = props.messages.dialogsMessages.map(messages => <Messages id={messages.id} message={messages.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.chat}>
                {messages}
            </div>
        </div>
    )
}