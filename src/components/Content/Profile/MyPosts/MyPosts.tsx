import React, {RefObject} from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {addPostType, PostDataType} from "../../../../redux/state";

type MyPostsPropsType = {
    posts: PostDataType
    addPost: addPostType
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.addPost(text);
    }

    return (
        <div className={s.myPosts}>
            <textarea ref={newPostElement}/>
            <button className={s.btn} onClick={addPost}>Add post</button>
            {myPosts}
        </div>
    )
}