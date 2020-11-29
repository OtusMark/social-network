import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ChatList.module.css';
import ChatName from './ChatName/ChatName';
import { chatData } from '../../../../Server/dataBase';

function ChatList() {
    return (
        <div className={s.chatList}>
            <ChatName chatName={chatData[0].name} chatId={chatData[0].id}/>
            <ChatName chatName={chatData[1].name} chatId={chatData[1].id}/>
            <ChatName chatName={chatData[2].name} chatId={chatData[2].id}/>
            <ChatName chatName={chatData[3].name} chatId={chatData[3].id}/>
        </div>
    );
}

export default ChatList;