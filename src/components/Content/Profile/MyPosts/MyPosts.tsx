import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../index";

type MyPostsPropsType = {
    posts: PostDataType
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes}/>)

    return (
        <div className={s.myPosts}>
            <textarea/>
            <button className={s.btn}>Add post</button>
            {myPosts}
        </div>
    )
}