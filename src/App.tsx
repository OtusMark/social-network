import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {PostDataType} from "./index";

type AppPropsType = {
    posts: PostDataType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content posts={props.posts}/>
            </div>
        </BrowserRouter>
    )
}
export default App;