import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Router } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs_container";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Route
            path="/Dialogs"
            render={() => (
              <DialogsContainer store = {props.store}/>
                // state={props.state.DialogsPage}
                // dispatch={props.dispatch}
                
             
            )}
          />
          <Route
            path="/Profile"
            render={() => (
              <Profile
              store={props.store}
              />
            )}
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
