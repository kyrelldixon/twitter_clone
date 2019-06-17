import React from 'react';
import './UserNav.css';
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav id="user-nav">
    <div className="userhome-container">
      <ul>
        <li> <i className="fas fa-home"></i> </li>
        <li> <Link to="#" className="nav-link"><i className="fas fa-hashtag"></i></Link> </li>
        <li> <Link to="#" className="nav-link"><i className="far fa-bell"></i></Link> </li>
        <li> <Link to="#" className="nav-link"><i className="far fa-envelope"></i></Link> </li>
      </ul>
      <input id="search-box" placeholder="Search Twitter" />
      <div id="acct-link">
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <span>Name</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  </nav>
)

export default UserNav;