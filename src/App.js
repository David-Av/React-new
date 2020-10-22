import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Router } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
    <div className = "app_wrapper"> 
      <Header/>
      <Navbar/>
      <div className = 'app_wrapper_content'>
        <Route path = '/Dialogs'  render = {()=> <Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData}/>}/>
        <Route  path = '/Profile' render = {()=><Profile posts= {props.posts}/>}/>
        
      </div>
      </div>
      </BrowserRouter>
  );
};

export default App;

/*
gitk --all&
*/