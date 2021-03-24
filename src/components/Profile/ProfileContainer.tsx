import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, savePhoto, updateProfileStatus} from "../../redux/reducers/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PropsType = any

class ProfileContainer extends React.Component<PropsType, {}> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.loggedInUserId;
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateProfileStatus}
                     savePhoto={this.props.savePhoto}
                     {...this.props}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedInUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus, savePhoto}),
    withRouter, withAuthRedirect
)(ProfileContainer)

// Compose is alternative to writing the hoc hell, like in the line below.
// export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)))