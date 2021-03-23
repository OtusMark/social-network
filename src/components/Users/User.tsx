import userAvatarDefault from "../../assets/images/avatar-default.png";
import styles from "./Users.module.scss";
import React from "react";
import {UserType} from "../../redux/reducers/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";

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
                    <img src={user.photos.small != null ? user.photos.small : userAvatarDefault}
                         className={styles.usersPhoto}
                         alt='User'/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some((u: number) => u === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }
                              }>Unfollow</button>
                    : <button disabled={followingInProgress.some((u: number) => u === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }
                              }>Follow</button>}
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
    )
}