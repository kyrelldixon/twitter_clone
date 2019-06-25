import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth } from '../../hooks';
import authClient from '../../services/authClient';
import { generateRandomIconUrl } from '../../services/randomImageClient';
import { getFollowerCount, getFollowingCount } from '../../services/relationshipClient';

import './UserMenu.css';

const UserMenu = (props) => {
  const [{ user }, ] = useAuth();
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const logout = async (e) => {
    try {
      await authClient.logout();
      props.history.push('/login');
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getFollowCounts = async () => {
      try {
        const followerCountResponse = await getFollowerCount();
        setFollowerCount(followerCountResponse);
        const followingCountResponse = await getFollowingCount();
        setFollowingCount(followingCountResponse);
      } catch (error) {
        console.error(error);
      }
    }

    getFollowCounts();
  }, []);

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
          <img className="img-user-menu" alt="user" src={generateRandomIconUrl()} />
          <div className="menu-name">{user.name || "no name found"}</div>
          <div className="menu-username">@{user.username || "no username found"}</div>
          <div className="menu-follow-count">{followingCount || 0} Following </div>
          <div className="menu-follow-count">{followerCount || 0} Followers</div>
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
