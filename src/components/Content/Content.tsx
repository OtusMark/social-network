import React from 'react';
import {Route} from 'react-router-dom';
import s from './Content.module.scss'
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import {addPostType, messagesStateType, profileStateType} from "../../redux/state";

type ContentPropsType = {
    profile: profileStateType
    messages: messagesStateType
    addPost: addPostType
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.content}>
            <Route path='/profile'
                   render={() => <Profile posts={props.profile.posts} addPost={props.addPost}/>}/>
            <Route path='/dialogs'
                   render={() => <Dialogs messages={props.messages}/>}/>
        </div>
    )
}