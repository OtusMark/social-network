import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let chatData = [
  {id: '1', name: 'Dmitry', 
  messages: ['Hello my name is Dmitry I am who I am.', 'hi']},
  {id: '2', name: 'Ivan',
  messages: ['I am Ivan. Nice to meet you.']},
  {id: '3', name: 'Sveta',
  messages: ['Hi my name is Sveta.', 'Salut']},
  {id: '4', name: 'Igor',
  messages: ['hello my name is Igor, I\'ll be back.']},
];

let postData = [
  {id: '1', message: 'It\'s time to kick ass and chew bubble gum. And I\'m all out of gum.'},
  {id: '2', message: 'You\'re an inspiration for birth-control.'},
  {id: '3', message: 'I\'ll rip your head off and shit down your neck!'},
  {id: '4', message: 'Your face. Your ass. What\'s the difference?'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} chats={chatData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

