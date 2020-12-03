import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {
  return (
    <div className={s.item}>
      <img src='https://avt-18.foto.mail.ru/mail/shilo1991/_avatar180?' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;