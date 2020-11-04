import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {  Route  } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs_container";
import UsersContainer from "./components/Users/Users_Container";
import ProfileContiner from "./components/Profile/Profile_Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content">
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/Profile/:userId?" render={() => <ProfileContiner />} />
        <Route path="/users" render={() => <UsersContainer/>} />
        <Route path="/login" render={() =><Login/> } />
      </div>
    </div>
  );
};

export default App;

/*
gitk --all&
*/
