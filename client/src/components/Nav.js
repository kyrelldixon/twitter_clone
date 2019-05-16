import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <div className="container">
      <ul>
        <li> <Link to="/" className="nav-link"><i className="fab fa-twitter"></i> Home</Link> </li>
        <li> <Link to="/login" className="nav-link">Login</Link> </li>
        <li id="nav-right"> <a href="#3">Language: English</a> </li>
      </ul>
    </div>
  </nav>
)

export default Nav;