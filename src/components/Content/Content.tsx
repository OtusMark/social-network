import React from 'react';
import { Route } from 'react-router-dom';
import s from './Content.module.css';
import Chats from './Chats/Chats';
import Profile from './Profile/Profile';

function Content() {
    return (
        <div className={s.content}>
            <Route path="/Profile" render={() => <Profile />} />
            <Route path="/Chats" render={() => <Chats />} />
        </div>
    );
}

export default Content;


{/* 
    !!!NavLink adds class "active" to active link. If you use css modules
    you might have a problem, because css modules adds postfix to the class active
    and it looks. You can add activeClassName to change the class name to the one
    in the module.css!!!
    <NavLink to "/profile" activeClassName={s.activeLink}>Profile</NavLink>

    !!! When you use route with render you can't use props !!!
    <Route path="/Chats" component={Chats} />

    !!! To use props you must use render instead of component !!!
    <Route path="/Chats" render={() => <Chats />} />
    -------------------------------------------------


*/}