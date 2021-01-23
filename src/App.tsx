import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/profilePage'
                           render={() => <Profile/>}/>
                    <Route path='/dialogsPage'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/usersPage'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;