import userAvatarDefault from '../../assets/svg/lotus.svg';
import React from "react";
import {UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {Avatar} from "../common/Avatar/Avatar";
import {Button} from "../common/Button/Button";

type PropsType = {
    user: UserType
    followingInProgress: []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<PropsType> = ({
    user,
    followingInProgress, follow, unfollow
}) => {

    return (
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <Avatar src={user.photos.small != null ? user.photos.small : userAvatarDefault}
                         alt='User'/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <Button disabled={followingInProgress.some((u: number) => u === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }
                              }>Unfollow</Button>
                    : <Button disabled={followingInProgress.some((u: number) => u === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }
                              }>Follow</Button>}
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
    )
}