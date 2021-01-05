import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, stateType, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}