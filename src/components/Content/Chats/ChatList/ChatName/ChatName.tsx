import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ChatName.module.css';

type ChatNamePropsType = {
    chatId: string;
    chatName: string;
};

function ChatName (props: ChatNamePropsType) {
    return (
        <NavLink to={`/Chats/${props.chatId}`}>{props.chatName}</NavLink>
    );
}

export default ChatName;