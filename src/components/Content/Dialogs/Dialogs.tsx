import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";

type DialogsDataType = Array<DialogsType>
type MessagesDataType = Array<MessagesType>

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

let dialogsData: DialogsDataType = [
    {id: 1, name: 'Mark'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Issac'},
    {id: 4, name: 'Robert'},
    {id: 5, name: 'Arthur'}
]

let messagesData: MessagesDataType = [
    {id: 1, message: 'My name is Mark'},
    {id: 2, message: 'My name is Ivan'},
    {id: 3, message: 'My name is Issac'},
    {id: 4, message: 'My name is Robert'},
    {id: 5, message: 'My name is Arthur'}
]

let dialogsElements = dialogsData.map(dialogs => <DialogsItem id={dialogs.id} name={dialogs.name}/>)
let messages = messagesData.map(messages => <Messages id={messages.id} message={messages.message}/>)

export const Dialogs = () => {

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