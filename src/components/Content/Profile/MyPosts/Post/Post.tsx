import React from 'react';
import s from './Post.module.css';

function Post(props: any) {
    return (
        <div>
            <img src="https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg" alt="" className={s.avatar} />
            <p className="post">{props.message}</p>
            <p className="likes">{props.likes}</p>
        </div>
    );
}

export default Post;

