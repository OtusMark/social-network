import userAvatarDefault from "../../assets/images/avatar-default.png";
import styles from "./Users.module.scss";
import React from "react";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <span onClick={(e) => {props.onPageChanged(p)}}>{p}</span>)}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userAvatarDefault}
                         className={styles.usersPhoto}
                         alt='User image'/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>)}
        </div>
    )
}