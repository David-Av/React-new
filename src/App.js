import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Router } from "react-router-dom";


const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Route
            path="/Dialogs"
            render={() => <Dialogs state={props.state.DialogsPage} dialogMessageText={props.dialogMessageText} addMessage = {props.addMessage} />}
          />
          <Route
            path="/Profile"
            render={() => <Profile profilePage={props.state.profilePage}
                dispatch = {props.dispatch}
            />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

/*
gitk --all&
*/
