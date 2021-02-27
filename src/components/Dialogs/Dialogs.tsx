import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {dialogsStateType, DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import { Redirect } from 'react-router-dom';

type PropsType = {
    NewMessageChange: (body: string) => void
    SendMessage: () => void
    dialogsPage: dialogsStateType
}

export const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((dialogs: DialogsType)  => <DialogsItem id={dialogs.id} key={dialogs.id} name={dialogs.name}/>)
    let messages = state.messages.map((messages: MessagesType) => <Messages id={messages.id} key={messages.id} message={messages.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.SendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.NewMessageChange(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.chat}>
                <div>{messages}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}