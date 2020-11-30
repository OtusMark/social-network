import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ChatName.module.css';


function ChatName(props: any) {
    return (
        <NavLink to={`/chats/${props.chatId.id}`}>{props.chatName.name}</NavLink>
    );
}

export default ChatName;