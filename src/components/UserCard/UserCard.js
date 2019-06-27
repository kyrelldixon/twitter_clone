import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../FollowButton';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './UserCard.css';

const UserCard = ({ user }) => {

  return (
    <div id="usercard-wrapper">
      <img alt="user" src={generateRandomIconUrl()} />
      <div>
        <Link to={user.username} id="name">{user.name || "no name found"}</Link>
        <div id="btn-box">
          <FollowButton userId={user.id} />
        </div>
        <Link to={user.username} id="username">@{user.username || "no username found"}</Link>
      </div>
    </div>
  );
}

export default UserCard;