import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import {stateType, store, storeType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)












// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();