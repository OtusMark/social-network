import React from 'react';
import {Route} from 'react-router-dom';
import s from './Content.module.scss'
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import { DispatchType, messagesStateType, profileStateType} from "../../redux/state";

type ContentPropsType = {
    profilePage: profileStateType
    messagesPage: messagesStateType
    dispatch: DispatchType
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.content}>
            <Route path='/profilePage'
                   render={() => <Profile
                       posts={props.profilePage.posts}
                       dispatch={props.dispatch}
                       newPostText={props.profilePage.newPostText}/>}/>
            <Route path='/dialogs'
                   render={() => <Dialogs messages={props.messagesPage}/>}/>
        </div>
    )
}