import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType, StoreType} from "./redux/store";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: StateType
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
                           render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;