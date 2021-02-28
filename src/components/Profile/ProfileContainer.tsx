import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

type PropsType = any

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 13268;
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateProfileStatus}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})



export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    // withAuthRedirect - Have been removed do to the problem that router is redirecting to login page on first load.
)(ProfileContainer)
// Compose is alternative to writing the hoc hell, like in the line below.
// export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)))