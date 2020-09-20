import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className = "app_wrapper"> 
      <Header/>
      <Navbar/>
      <Profile/>
      </div>
  );
};

export default App;
