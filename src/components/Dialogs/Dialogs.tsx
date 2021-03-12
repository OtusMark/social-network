import React from 'react';
import s from './Dialogs.module.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {dialogsStateType, DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import {Field, Form} from 'react-final-form';

type PropsType = {
    // NewMessageChange: (body: string) => void
    SendMessage: (message: string) => void
    dialogsPage: dialogsStateType
}

export const Dialogs = (props: PropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((dialogs: DialogsType) => <DialogsItem id={dialogs.id}
                                                                                   key={dialogs.id}
                                                                                   name={dialogs.name}/>)

    let messages = state.messages.map((messages: MessagesType) => <Messages id={messages.id}
                                                                            key={messages.id}
                                                                            message={messages.message}/>)

    // let newMessageBody = state.newMessageBody

    let onSendMessageClick = (message: string) => {
        props.SendMessage(message)
    }

    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.target.value
    //     props.NewMessageChange(body)
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.chat}>
                <div>{messages}</div>
                <AddMessageForm
                    // newMessageBody={newMessageBody}
                    onSendMessageClick={onSendMessageClick}/>
            </div>
        </div>
    )
}


const AddMessageForm = (props: any) => {
    return (
        <Form
            // initialValues={{newMessageBody: 'Hey'}}
            onSubmit={values => {
                props.onSendMessageClick(values.newMessage)
                console.log(values.newMessage)
            }}>
            {({handleSubmit, form}) => (
                <form onSubmit={async event => {
                    await handleSubmit(event)
                    form.reset()
                    console.log('works')
                }}>
                    <div>
                        <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'}/>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
        </Form>
    )
}