import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatus,
    getUserProfile,
    savePhoto,
    saveProfile, setEditMode,
    updateProfileStatus
} from "../../redux/reducers/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppRootStateType} from "../../redux/store";

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
                     editMode={this.props.editMode}
                     updateStatus={this.props.updateProfileStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     formError={this.props.formError}
                     setEditMode={this.props.setEditMode}
                     {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    editMode: state.profilePage.profileEditModeOn,
    loggedInUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    formError: state.form.error
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus, savePhoto, saveProfile, setEditMode}),
    withRouter, withAuthRedirect
)(ProfileContainer)

// Compose is alternative to writing the hoc hell, like in the line below.
// export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)))