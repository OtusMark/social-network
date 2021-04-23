import React from "react";
import {UserType} from "../../redux/reducers/users-reducer";
import {User} from "./User";
import {Pagination} from "../common/Pagination/Pagination";

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
            <Pagination pageSize={props.pageSize}
                        totalItemsCount={props.totalUsersCount}
                        currentPage={props.currentPage}
                        changePage={props.onPageChanged}
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