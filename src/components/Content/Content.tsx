import React from 'react';
import {Route} from 'react-router-dom';
import s from './Content.module.scss'
import {Dialogs} from "./Dialogs/Dialogs";
import {Profile} from "./Profile/Profile";
import {PostDataType} from "../../index";

type ContentPropsType = {
    posts: PostDataType
}

export const Content = (props: ContentPropsType) => {
    return (
        <div className={s.content}>
            <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
            <Route path='/dialogs' render={() => <Dialogs/>}/>
        </div>
    )
}