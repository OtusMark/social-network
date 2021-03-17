import React from 'react';
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/reducers/profile-reducer";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: PostDataType
}

export const MyPosts = (props: MyPostsPropsType) => {

    let myPosts = props.posts.map(post => <Post key={post.id} id={post.id} post={post.post} likes={post.likes}/>)


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
                        <Field component={TextArea}
                               name={'newPost'}
                               placeholder={'Add new post'}
                               validate={composeValidators(maxLength(150))}/>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}>
        </Form>
    )
}