import React from 'react';
import Avatar from '../../../../Avatar/Avatar';
import s from './Post.module.css';

type PostPropsType = {
    message: string;
    likes: string;
};

function Post(props: PostPropsType) {
    return (
        <div>
            <Avatar />
            <p className={s.post}>{props.message}</p>
            <p className={s.likes}>{props.likes}</p>
        </div>
    );
}

export default Post;

