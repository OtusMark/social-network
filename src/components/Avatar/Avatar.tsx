import React from 'react'
import s from './Avatar.module.css'

type AvatarPropsType = {
    img: string;
};

function Avatar () {
    return (
        <img className={s.avatar} src="https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg" alt="" />
    );
}

export default Avatar;