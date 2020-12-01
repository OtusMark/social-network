import { type } from 'os';
import React from 'react';
import s from './ChatList.module.css';
import ChatName from './ChatName/ChatName';

function ChatList(props: any) {

    let chatElemets =
        props.chats.map(arr => <ChatName chatId={arr} chatName={arr} />)

    return (
        <div className={s.chatList}>
            {chatElemets}
        </div>
    );
}

export default ChatList;

{/* <ChatName chatName={chatData[0].name} chatId={chatData[0].id}/>
    <ChatName chatName={chatData[1].name} chatId={chatData[1].id}/>
    <ChatName chatName={chatData[2].name} chatId={chatData[2].id}/>
    <ChatName chatName={chatData[3].name} chatId={chatData[3].id}/>
    ===============================================================
    let chatElemets =
        chatData.map(cD => <ChatName chatName={cD.name} chatId={cD.id} />)
    {chatElemets}
*/}