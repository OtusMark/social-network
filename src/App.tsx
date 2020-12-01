import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App(props: any) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content profilePage={props.state.profilePage} chatPage={props.state.chatPage}/>
      </div>
  );
}

export default App;
