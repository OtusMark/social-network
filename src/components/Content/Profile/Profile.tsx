import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './NewPost/NewPost';
import s from './Profile.module.css';

type ProfilePropsType = {
  profilePage: {
    myPosts: [];
  };
}

function Profile(props: ProfilePropsType) {
  
  return (
    <div className={s.profile}>
      <NewPost />
      <MyPosts myPosts={props.profilePage.myPosts}/>
    </div>
  );
}

export default Profile;