import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu';
import { useAuth } from '../../hooks';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './UserNav.css';

const UserNav = () => {
  const [{ user, isAuthenticated }, ] = useAuth();
  const [menuDisplayState, setMenuDisplayState] = useState();

  return (
    <nav id="user-nav">
      <div className="home-nav-container">
        <ul>
          <Link to="/home" className="nav-link" id="active-link"><i className="fas fa-home"></i></Link>
          <UserMenu display={menuDisplayState} handleDisplay={setMenuDisplayState} />
          <Link to="/home" className="nav-link"><i className="fas fa-hashtag"></i></Link>
          <Link to="/home" className="nav-link"><i className="far fa-bell"></i></Link>
          <Link to="/home" className="nav-link"><i className="far fa-envelope"></i></Link>
        </ul>
        <input id="search-box" placeholder="Search Twitter" />
        <button id="nav-icon-button" onClick={() => setMenuDisplayState(true)}><span id="acct-link">
          {isAuthenticated && <img className="user-profile-img" alt="user" src={generateRandomIconUrl()} />}
          <span>{user ? user.name : 'Not Signed In'}</span>
          <i className="fas fa-chevron-down"></i>
        </span>
        </button>
      </div>
    </nav>
  )
}


export default UserNav;
