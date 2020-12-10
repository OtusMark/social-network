import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props: any) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    // Создаем ссылку на элемент из JSX ref={newPostElement} C ref мы обращаемся к DOM элементу, что не очень хорошо.
    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;