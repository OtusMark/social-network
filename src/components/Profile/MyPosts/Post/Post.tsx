import React from 'react';
import {PostType} from "../../../../redux/reducers/profile-reducer";
import { Avatar } from '../../../common/Avatar/Avatar';
import styled from "styled-components";

type PostPropsType = PostType;

let avatarSrc = 'https://at-cdn-s02.audiotool.com/2020-12-04/users/error_/avatar256x256-31037b09db3c4089b73baef792827e1b.jpg'

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <PostWrapper>
            <Avatar src={avatarSrc} size='small' alt="Avatar"/>
            <div>{props.post}</div>
            <div>Likes: {props.likes}</div>
        </PostWrapper>
    )
}

const PostWrapper = styled.div`
  
`