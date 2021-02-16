import React from "react";
import {connect} from "react-redux";
import {CombinedStateType} from "../../redux/store";
import {
    follow,
    setCurrentPage, setIsFetching,
    setUsers,
    setUsersTotalCount, toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersAPIPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (count: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

export class UsersAPI extends React.Component<UsersAPIPropsType, {}> {

    componentDidMount() {
        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: CombinedStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setIsFetching,
    toggleIsFollowingProgress
})(UsersAPI)

// let mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (count: number) => {
//             dispatch(setUsersTotalCount(count))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetching(isFetching))
//         }
//     }
// }