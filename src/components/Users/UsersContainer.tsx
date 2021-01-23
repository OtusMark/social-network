import React from "react";
import {connect} from "react-redux";
import {CombinedStateType, DispatchType} from "../../redux/store";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";

let mapStateToProps = (state: CombinedStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)