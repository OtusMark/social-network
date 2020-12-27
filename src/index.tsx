import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export type PostType = {
    id: number
    post: string
    likes: number
}
export type PostDataType = Array<PostType>

let posts: PostDataType = [
    {id: 1, post: 'My first post', likes: 1},
    {id: 2, post: 'My second post', likes: 2},
    {id: 3, post: 'My third post', likes: 3},
    {id: 4, post: 'My fourth post', likes: 4},
    {id: 5, post: 'My fifth post', likes: 5}
]

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts}/>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();