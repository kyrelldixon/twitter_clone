import React from 'react';
import './UserNav.css';
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav id="user-nav">
    <div className="userhome-nav-container">
      <ul>
        <li> <Link to="#" className="nav-link"><i className="fas fa-home"></i></Link> </li>
        <li> <Link to="#" className="nav-link"><i className="fas fa-hashtag"></i></Link> </li>
        <li> <Link to="#" className="nav-link"><i className="far fa-bell"></i></Link> </li>
        <li> <Link to="#" className="nav-link"><i className="far fa-envelope"></i></Link> </li>
      </ul>
      <input id="search-box" placeholder="Search Twitter" />
      <span id="acct-link">
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <span>Name</span>
        <i className="fas fa-chevron-down"></i>
      </span>
    </div>
  </nav>
)

export default UserNav;