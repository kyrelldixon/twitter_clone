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
    } catch (error) {
      console.error(error);
    }
    props.history.push('/login');
  }

  useEffect(() => {
    const getFollowCounts = async () => {
      try {
        const followerCountResponse = await getFollowerCount({
          username: user.username
        });
        setFollowerCount(followerCountResponse);
        const followingCountResponse = await getFollowingCount({
          username: user.username
        });
        setFollowingCount(followingCountResponse);
      } catch (error) {
        console.error(error);
      }
    }

    getFollowCounts();
  }, [user]);

  return (
    <div id="modal-bg" className={props.display ? 'show-menu' : 'hide-menu'} onClick={(event) => {
      if (event.target.id === 'modal-bg') {
        props.handleDisplay(false);
      }
    }}>
      <div className="user-menu">
        {user ? <>
          <div className="user-menu-head">
            <h2 className="title-user-menu">Account Info</h2>
            <button className="menu-close-btn" onClick={() => props.handleDisplay(false)}>X</button>
          </div>
          <div className="user-menu-main">
            <img className="img-user-menu" alt="user" src={generateRandomIconUrl()} />
            <div className="menu-name">{user.name || "no name found"}</div>
            <div className="username">@{user.username || "no username found"}</div>
            <span className="user-follow-num">{followingCount || 0}</span>
            <span className="user-follow-text"> Following</span>
            <span className="user-follow-num">{followerCount || 0}</span>
            <span className="user-follow-text"> Follower{followerCount === 1 ? "" : "s"}</span>
            <div><Link className="user-menu-link" to={`/${user.username}`} onClick={() => props.handleDisplay(false)}>Profile</Link></div>
            <div><Link className="user-menu-link" onClick={logout}>Logout</Link></div>
          </div>
        </> :
        <div><Link to="/login">Login</Link></div>
      }
      </div>
    </div>
  );
}

export default withRouter(UserMenu);
