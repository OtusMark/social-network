import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import {AppRootStateType} from "./redux/store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer").then(module => ({default: module.DialogsContainer})))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer").then(module => ({default: module.UsersContainer})))

type PropsType = any

class App extends React.Component<PropsType, any> {

    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        console.error('catch unhandled error have been triggered')
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()

        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-content'>

                        <Switch>

                            <Redirect exact path='/' to={'/profile'}/>

                            <Route path='/profile/:userId?'>
                                <ProfileContainer/>
                            </Route>

                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>

                            <Route path='/users' render={withSuspense(UsersContainer)}/>

                            <Route path='/login'>
                                <LoginPage/>
                            </Route>

                            <Route path='*'>
                                <div> 404 page</div>
                            </Route>
                        </Switch>

                    </div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}))(App);