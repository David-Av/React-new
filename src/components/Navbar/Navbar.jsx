import React from 'react';
import s from './navbar.module.css'
let Navbar = () =>{
    return (
        <nav className = {s.nav}> 
        <div>
        <a href = '/Profile'>Profile</a>
        </div>
        <div>
          <a  href = '/Dialogs'>Messages</a>
        </div>
        <div>
          <a  href = '/News'>News</a>
        </div>
        <div>
          <a  href = '/Music'>Music</a>
        </div>
        <div>
          <a href = '/Settings' >Setting</a>
        </div>
      </nav>
    )
}
export default Navbar;