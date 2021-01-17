import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import { sendMessageAC, StoreType, updateNewMessageBodyAC} from "../../../redux/state";

type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialogs => <DialogsItem id={dialogs.id} name={dialogs.name}/>)
    let messages = state.messages.map(messages => <Messages id={messages.id} message={messages.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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