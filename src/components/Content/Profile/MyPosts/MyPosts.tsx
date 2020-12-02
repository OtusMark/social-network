import React from 'react';
import Post from './Post/Post';

function MyPosts(props: any) {
    let newPostElement: any = React.createRef();

    let newPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let myPosts =
    props.profilePage.myPosts.map(arr => <Post myPosts={arr} />)

    return (
        <div className="my_posts">
            <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
            <button onClick= {newPost}>add post</button>
            {myPosts}
        </div>
    );
}

export default MyPosts;
