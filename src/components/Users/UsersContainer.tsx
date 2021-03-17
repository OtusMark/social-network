import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    follow,
    requestUsers,
    setCurrentPage, toggleIsFollowingProgress, unfollow,
    UserType
} from "../../redux/reducers/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    CurrentPageSelector, FollowingInProgressSelector, IsFetchingSelector,
    PageSizeSelector,
    TotalUsersCountSelector,
    UsersSelector, UsersSelectorR
} from "../../redux/selectors/users-selectors";

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

class UsersContainerClass extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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

// let mapStateToProps = (state: CombinedStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

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

// Compose is alternative to writing the hoc hell, like in the line below.
// export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleIsFollowingProgress,
//     getUsers,
// })(UsersContainerClass))

// Instead of writing mapDispatchToProps like below, we simply can send the action creators
// as an object like in the code above
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