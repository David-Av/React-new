import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css'
let Navbar = () =>{
    return (
        <nav className = {s.nav}> 
       
        <div className = {s.item}>
        <NavLink activeClassName = {s.activeLink} to = '/Profile'>Profile</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink  activeClassName = {s.activeLink} to = '/Dialogs'>Messges</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink  activeClassName = {s.activeLink} to = '/News'>News</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink  activeClassName = {s.activeLink} to = '/Music'>Music</NavLink>
        </div>
        <div className = {s.item}> 
          <NavLink activeClassName = {s.activeLink} to = '/Settings' >Setting</NavLink>
        </div>
        <div className = {s.item}> 
          <NavLink activeClassName = {s.activeLink} to = '/users' >Users</NavLink>
        </div>
      </nav>
    )
}
export default Navbar;