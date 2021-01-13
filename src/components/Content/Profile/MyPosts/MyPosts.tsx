import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {DispatchType, PostDataType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostDataType
    dispatch: DispatchType
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
        }
    }

    return (
        <div className={s.myPosts}>
            <textarea ref={newPostElement} value={props.newPostText} onChange={newPostChange}/>
            <button className={s.btn} onClick={addPost}>Add post</button>
            {myPosts}
        </div>
    )
}