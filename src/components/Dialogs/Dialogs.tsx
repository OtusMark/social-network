import React from 'react';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {dialogsStateType, DialogsType, MessagesType} from "../../redux/reducers/dialogs-reducer";
import {Field, Form} from 'react-final-form';
import {TextArea} from "../common/FormControls/FormControls";
import {composeValidators, maxLength} from "../../utils/validators/validators";

type PropsType = {
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

    let onSendMessageClick = (message: string) => {
        props.SendMessage(message)
    }
    return (
        <div>
            <div>
                <div>{dialogsElements}</div>
            </div>
            <div>
                <div>{messages}</div>
                <AddMessageForm
                    onSendMessageClick={onSendMessageClick}/>
            </div>
        </div>
    )
}

// Add Message form component
type FormPropsType = {
    onSendMessageClick: (message: string) => void
}

const AddMessageForm: React.FC<FormPropsType> = ({onSendMessageClick}) => {
    return (
        <Form
            onSubmit={values => {
                onSendMessageClick(values.newMessage)
            }}
            render={({handleSubmit, form}) => (
                <form onSubmit={async event => {
                    await handleSubmit(event)
                    form.reset()
                }}>
                    <div>
                        <Field component={TextArea}
                               name={'newMessage'}
                               placeholder={'Enter your message'}
                               validate={composeValidators(maxLength(15))}/>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}>
        </Form>
    )
}