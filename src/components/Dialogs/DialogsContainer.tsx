import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {DialogsType, MessagesType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: any
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let SendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let NewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs dialogsPage={state} NewMessageChange={NewMessageChange} SendMessage={SendMessage}/>
}