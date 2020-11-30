import React from 'react'
import ChatDialog from './ChatDialog/ChatDialog';
import ChatList from './ChatList/ChatList';
import s from './Chats.module.css';


function Chats(props: any) {
    return (
        <div className={s.Chats}>
            <ChatList chats={props.chats}/>
            <ChatDialog chats={props.chats} />
        </div>
    );
}

export default Chats;
