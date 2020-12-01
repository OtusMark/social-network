import React from 'react';
import Post from './Post/Post';

type MyPostsPropsType = {
    myPosts: string[];
};

function MyPosts(props: MyPostsPropsType) {

    let myPosts =
    props.myPosts.map(arr => <Post myPosts={arr} />)

    return (
        <div className="my_posts">
            {myPosts}
        </div>
    );
}

export default MyPosts;
