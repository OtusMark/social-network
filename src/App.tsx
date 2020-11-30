import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';


function App(props: any) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content posts={props.posts} chats={props.chats}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
