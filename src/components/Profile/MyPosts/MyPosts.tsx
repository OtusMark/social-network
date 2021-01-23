import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostDataType
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let text = e.currentTarget.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.myPosts}>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            <button className={s.btn} onClick={onAddPost}>Add post</button>
            {myPosts}
        </div>
    )
}