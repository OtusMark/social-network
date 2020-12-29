import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content profile={props.state.profile}
                         messages={props.state.messages}/>
            </div>
        </BrowserRouter>
    )
}
export default App;