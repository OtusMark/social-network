import React from 'react';
import Avatar from '../../../../Avatar/Avatar';
import s from './Post.module.css';

function Post(props: any) {
    return (
        <div>
            <Avatar />
            <p className={s.post}>{props.myPosts.post}</p>
            <p className={s.likes}>{props.myPosts.likes}</p>
        </div>
    );
}

export default Post;

