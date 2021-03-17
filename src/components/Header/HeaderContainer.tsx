import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";
import {AppRootStateType} from "../../redux/store";

class HeaderContainer extends React.Component<any, {}> {
    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logout={this.props.logout}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) =>  ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout}) (HeaderContainer);