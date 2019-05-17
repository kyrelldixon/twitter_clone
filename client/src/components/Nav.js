import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <div className="container">
      <ul>
        <li> <Link to="/" className="nav-link"><i className="fab fa-twitter"></i><span>Home</span></Link> </li>
        <li> <Link to="/login" className="nav-link"> <span>Login</span> </Link> </li>
        <li id="nav-right" className="nav-link"> <Link><span>Language: English</span></Link> </li>
      </ul>
    </div>
  </nav>
)

export default Nav;