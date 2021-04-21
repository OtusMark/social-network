import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow,
    UserType
} from "../../redux/reducers/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    CurrentPageSelector,
    FollowingInProgressSelector,
    IsFetchingSelector,
    PageSizeSelector,
    TotalUsersCountSelector,
    UsersSelectorR
} from "../../redux/selectors/users-selectors";

class UsersContainerClass extends React.Component<PropsType, {}> {

    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props

        getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {getUsers, pageSize} = this.props

        getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: UsersSelectorR(state),
        pageSize: PageSizeSelector(state),
        totalUsersCount: TotalUsersCountSelector(state),
        currentPage: CurrentPageSelector(state),
        isFetching: IsFetchingSelector(state),
        followingInProgress: FollowingInProgressSelector(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers: requestUsers,
    }),
    withAuthRedirect,
)(UsersContainerClass)

// Types
type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}