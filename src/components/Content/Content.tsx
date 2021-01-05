import React from 'react';
import {Route} from 'react-router-dom';
import s from './Content.module.scss'
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import {addPostType, messagesStateType, profileStateType, updateNewPostTextType} from "../../redux/state";

type ContentPropsType = {
    profilePage: profileStateType
    messagesPage: messagesStateType
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.content}>
            <Route path='/profilePage'
                   render={() => <Profile posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText}/>}/>
            <Route path='/dialogs'
                   render={() => <Dialogs messages={props.messagesPage}/>}/>
        </div>
    )
}