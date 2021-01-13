import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import { DispatchType, stateType } from "./redux/state";

type AppPropsType = {
    state: stateType
    dispatch: DispatchType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content
                    profilePage={props.state.profilePage}
                    messagesPage={props.state.messagesPage}
                    dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>
    )
}
export default App;