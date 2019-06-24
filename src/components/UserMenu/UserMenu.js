import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../../hooks';
import authClient from '../../services/authClient';

import './UserMenu.css';

const UserMenu = (props) => {
  const [{ user }, ] = useAuth();

  const logout = async (e) => {
    try {
      await authClient.logout();
      props.history.push('/login');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="modal-bg" className={props.display ? 'show-menu' : 'hide-menu'} onClick={(event) => {
      if (event.target.id === 'modal-bg') {
        props.handleDisplay(false);
      }
    }}>
      <div className="user-menu">
        {user ? <>
          <h2 className="title-user-menu">Account Info</h2>
          <button className="menu-close-btn" onClick={() => props.handleDisplay(false)}>X</button>
          <img className="img-user-menu" alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          <div className="menu-name">{user.name || "no name found"}</div>
          <div className="menu-username">@{user.username || "no username found"}</div>
          <div className="menu-follow-count">{props.following || "0"} Following </div>
          <div className="menu-follow-count">{props.follower || "0"} Followers</div>
          <div><Link to={`/${user.username}`} onClick={() => props.handleDisplay(false)}>Profile</Link></div>
          <div><button onClick={logout}>Logout</button></div>
        </> :
        <div><Link to="/login">Login</Link></div>
      }
      </div>
    </div>
  );
}

export default withRouter(UserMenu);