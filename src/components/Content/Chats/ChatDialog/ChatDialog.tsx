import React from 'react';
import s from './ChatDialog.module.css';
import { stringify } from 'querystring';

function ChatDialog(props: any) {
    return (
        <div>
            {props.chats[0].messages}
        </div>
    );
}

export default ChatDialog;