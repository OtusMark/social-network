import {AppRootStateType} from "../store";
import {createSelector} from "reselect";

export const UsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

// An example of using Reselect library. Must be used only for complicated selectors.
export const UsersSelectorR = createSelector(UsersSelector, (users) => {
    return users
})

export const PageSizeSelector = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const TotalUsersCountSelector = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const CurrentPageSelector = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const IsFetchingSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const FollowingInProgressSelector = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}