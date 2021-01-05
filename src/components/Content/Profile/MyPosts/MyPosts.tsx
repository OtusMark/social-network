import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {addPostType, PostDataType, updateNewPostTextType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostDataType
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost()
    }

    let newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.updateNewPostText(e.currentTarget.value)
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