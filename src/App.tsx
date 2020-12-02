import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

function App(props: any) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content profilePage={props.state.profilePage} chatPage={props.state.chatPage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
      </div>
  );
}

export default App;
