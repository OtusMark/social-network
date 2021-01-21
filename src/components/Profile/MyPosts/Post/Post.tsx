import React from 'react';
import s from './Post.module.scss'
import {PostType} from "../../../../redux/store";

type PostPropsType = PostType;

let avatarSrc = 'https://at-cdn-s02.audiotool.com/2020-12-04/users/error_/avatar256x256-31037b09db3c4089b73baef792827e1b.jpg'

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.post}>
            <img src={avatarSrc} alt="Avatar" className={s.avatar}/>
            <div>{props.post}</div>
            <div>Likes: {props.likes}</div>
        </div>
    )
}