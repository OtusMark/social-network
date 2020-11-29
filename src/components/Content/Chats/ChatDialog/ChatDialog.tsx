import React from 'react';
import s from './ChatDialog.module.css';
import { chatData } from '../../../../Server/dataBase';
import { stringify } from 'querystring';

type ChatDialogPropsType = {
    chatId: string;
}

function ChatDialog(props: ChatDialogPropsType) {
    return (
        <div>
            {chatData[0].messages}
        </div>
    );
}

export default ChatDialog;