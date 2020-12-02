import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {  Route, withRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app_reducer";
import Preloader from "./components/Preloader/Preloader";
import store from "./Redux/redux_store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const ProfileContiner =  React.lazy(() => import("./components/Profile/Profile_Container"))
const DialogsContainer =  React.lazy(() => import("./components/Dialogs/Dialogs_container"))
const UsersContainer =  React.lazy(() => import("./components/Users/Users_Container"))


class App extends React.Component {
  // componentDidMount() {

  //   this.props.initializeApp()

  // }
  render() {
    if (!this.props.initialized) {

      return <Preloader />
    }


    return  <div className="app_wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app_wrapper_content">
            <Route path="/Dialogs" render={() => 
             <Suspense fallback = {<div>Loading...</div>}>
            <DialogsContainer />
            </Suspense>
            
          } />
            <Route path="/Profile/:userId?" render={() => 
            <Suspense fallback = {<div>Loading...</div>}>
            <ProfileContiner /> 
            </Suspense>
            } />
            <Route path="/users" render={() =>
              <Suspense fallback = {<div>Loading...</div>}>
              <UsersContainer />
              </Suspense>
              } />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>

  };
};
const mapStateToProps = state => ({

  initialized: state.app.initialized
})
const AppContainer =  compose
  (withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

 const JSAPP = (props)=>{
  return <BrowserRouter>
             <Provider store={store}>
                    <AppContainer />
               </Provider>
          </BrowserRouter>
}
export default JSAPP
/*
gitk --all&
*/
