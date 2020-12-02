import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

function Profile(props: any) {
  return (
    <div className={s.profile}>
      <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
}

export default Profile;