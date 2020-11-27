import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div className="my_posts">
            <Post message="My message" likes="5"/>
            <Post message="Another message" likes="10"/>
        </div>
    );
}

export default MyPosts;
