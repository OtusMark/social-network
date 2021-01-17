import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {DispatchType, stateType, StoreType} from "./redux/state";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";

type AppPropsType = {
    state: stateType
    dispatch: DispatchType
    store: StoreType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/profilePage'
                           render={() => <Profile
                               posts={props.state.profilePage.posts}
                               dispatch={props.dispatch}
                               newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;