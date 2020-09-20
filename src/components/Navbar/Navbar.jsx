import React from 'react';
import s from './navbar.module.css'
let Navbar = () =>{
    return (
        <nav className = {s.nav}> 
        <div>
        <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Setting</a>
        </div>
      </nav>
    )
}
export default Navbar;