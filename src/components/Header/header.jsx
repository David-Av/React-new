import React from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";

let Header = (props) => {
  return (
    <header className = {s.header}>
    <img src="https://w0.pngwave.com/png/100/1021/intel-png-clip-art.png" alt=""/>
    <div className = {s.loginBlock}>
      {props.isAuth ? <div>{props.login}
        - <button onClick={props.logout}>Log Out</button>
       </div> 
      :<NavLink to={'/login'}>login</NavLink>}
      
    </div>
  </header>
  );
};

export default Header;
