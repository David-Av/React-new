import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Router } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs_container";
import UsersContainer from "./components/Users/Users_Container";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/Profile" render={() => <Profile />} />
        <Route path="/users" render={() => <UsersContainer/>} />
      </div>
    </div>
  );
};

export default App;

/*
gitk --all&
*/
