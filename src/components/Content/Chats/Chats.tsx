import React from 'react'
import ChatDialog from './ChatDialog/ChatDialog';
import ChatList from './ChatList/ChatList';
import ChatName from './ChatList/ChatName/ChatName';
import s from './Chats.module.css';

type ChatPropsType = {
    chatId: string;
}

function Chats() {
    return (
        <div className={s.Chats}>
            <ChatList />
            <ChatDialog chatId={"1"} />
        </div>
    );
}

export default Chats;
