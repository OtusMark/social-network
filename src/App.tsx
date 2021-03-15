import React from 'react';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {CombinedStateType} from "./redux/store";
import {Preloader} from "./components/common/Preloader/Preloader";

type PropsType = any

class App extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-content'>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: CombinedStateType) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}))(App);