import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

function Profile() {
  return (
    <div className={s.profile}>
      <MyPosts />
    </div>
  );
}

export default Profile;