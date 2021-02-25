import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {CombinedStateType} from "../../redux/store";

class HeaderContainer extends React.Component<any, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state: CombinedStateType) =>  ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);