import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {  Route, withRouter  } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs_container";
import UsersContainer from "./components/Users/Users_Container";
import ProfileContiner from "./components/Profile/Profile_Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { me } from "./Redux/auth-reducer";
import { compose } from "redux";
import { initializeApp } from "./Redux/app_reducer";
import Preloader from "./components/Preloader/Preloader";

class App extends React.Component  {
  componentDidMount(){
        
    this.props.initializeApp()
    
}
  render()
   {
     if(!this.props.initialized){

     return  <Preloader/>
     }
   return <div className="app_wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app_wrapper_content">
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/Profile/:userId?" render={() => <ProfileContiner />} />
        <Route path="/users" render={() => <UsersContainer/>} />
        <Route path="/login" render={() =><Login/> } />
      </div>
    </div>
   };
};
const mapStateToProps = state=>({

  initialized:state.app.initialized
})
export default compose
(withRouter, 
  connect(mapStateToProps,{initializeApp})) (App);

/*
gitk --all&
*/
