import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/profile-reducer";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: PostDataType
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post id={post.id} post={post.post} likes={post.likes}/>)


    let onAddPost = (newPostText: string) => {
        props.addPost(newPostText)
    }

    return (
        <div className={s.myPosts}>
            <NewPostForm onAddPost={onAddPost}/>
            <div>
                {myPosts}
            </div>
        </div>
    )
}

type FormPropsType = {
    onAddPost: (newPostText: string) => void
}

// Form Component
const NewPostForm: React.FC<FormPropsType> = ({onAddPost}) => {
    return (
        <Form
            onSubmit={values => {
                onAddPost(values.newPost)
            }}
            render={({handleSubmit, form}) => (
                <form onSubmit={async event => {
                    await handleSubmit(event)
                    form.reset()
                }}>
                    <div>
                        <Field component={'textarea'} name={'newPost'} placeholder={'Add new post'} validate={composeValidators(required, maxLengthCreator(30))}/>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}>
        </Form>
    )
}