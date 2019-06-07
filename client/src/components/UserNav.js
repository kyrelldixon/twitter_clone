import React from 'react';
import './UserNav.css';
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav id="user-nav">
    <div className="userhome-container">
      <ul>
        <li> <i className="fas fa-home"></i> </li>
        <li> <Link to="/" className="nav-link"><i className="fas fa-hashtag"></i></Link> </li>
        <li> <Link to="/" className="nav-link"><i className="far fa-bell"></i></Link> </li>
        <li> <Link to="/" className="nav-link"><i className="far fa-envelope"></i></Link> </li>
      </ul>
    </div>
  </nav>
)

export default UserNav;