import userAvatarDefault from "../../assets/images/avatar-default.png";
import styles from "./Users.module.scss";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
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
                {pages.map(p => <span onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>)}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userAvatarDefault}
                             className={styles.usersPhoto}
                             alt='User image'/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'dd304e28-3d68-4d00-a172-a57bb7d47656'
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleIsFollowingProgress(false, u.id)
                            })

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'dd304e28-3d68-4d00-a172-a57bb7d47656'
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleIsFollowingProgress(false, u.id)
                            })

                        }}>Follow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>)}
        </div>
    )
}