import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav>
    <div className="container">
      <ul>
        <li className="home"> <NavLink to="/" className="nav-link"><i className="fab fa-twitter" id="nav-logo"></i><span>Home</span></NavLink> </li>
        <li className="about"> <NavLink to="/" className="nav-link"> <span>About</span> </NavLink> </li>
        <li className="nav-link pull-right"> <NavLink to="/login"><span>Language: English</span></NavLink> </li>
      </ul>
    </div>
  </nav>
)

export default Nav;