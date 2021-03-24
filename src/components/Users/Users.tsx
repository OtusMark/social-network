import React from "react";
import {UserType} from "../../redux/reducers/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       totalItemsCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       portionSize={10}
            />
            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        followingInProgress={props.followingInProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow}/>)}
        </div>
    )
}