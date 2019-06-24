import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserMenu from './UserMenu';
import './UserNav.css';

const UserNav = () => {

  const [menuDisplayState, setMenuDisplayState] = useState(false);

  return (
    <nav id="user-nav">
      <div className="home-nav-container">
        <ul>
          <Link to="home" className="nav-link" id="active-link"><i className="fas fa-home"></i></Link>
          <UserMenu display={menuDisplayState} handleDisplay={setMenuDisplayState} />
          <Link to="#" className="nav-link"><i className="fas fa-hashtag"></i></Link>
          <Link to="#" className="nav-link"><i className="far fa-bell"></i></Link>
          <Link to="#" className="nav-link"><i className="far fa-envelope"></i></Link>
        </ul>
        <input id="search-box" placeholder="Search Twitter" />
        <Link onClick={() => setMenuDisplayState(true)}><span id="acct-link">
          <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          <span>Name</span>
          <i className="fas fa-chevron-down"></i>
        </span></Link>
      </div>
    </nav>
  );
}

export default UserNav;