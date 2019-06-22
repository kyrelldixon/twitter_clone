import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav>
    <div className="container">
      <ul>
        <li> <Link to="/" className="nav-link"><i className="fab fa-twitter" id="nav-logo"></i><span>Home</span></Link> </li>
        <li> <Link to="/" className="nav-link"> <span>About</span> </Link> </li>
        <li id="nav-right" className="nav-link"> <Link to="#"><span>Language: English</span></Link> </li>
      </ul>
    </div>
  </nav>
)

export default Nav;