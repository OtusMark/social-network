import React from 'react';
import { Route } from 'react-router-dom';
import s from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

function Content() {
    return (
        <div className={s.content}>
            <Route path="/Dialogs" component={Dialogs} />
            <Route path="/Profile" component={Profile} />
        </div>
    );
}

export default Content;