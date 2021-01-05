import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {addPostType, stateType, updateNewPostTextType} from "./redux/state";

type AppPropsType = {
    state: stateType
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
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
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </BrowserRouter>
    )
}
export default App;