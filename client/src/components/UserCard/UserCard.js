import React from 'react';
import FollowButton from '../FollowButton';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './UserCard.css';

const UserCard = (props) => {

  return (
    <div id="usercard-wrapper">
      <img alt="user" src={generateRandomIconUrl()} />
      <div>
        <div>{props.id}</div>
        <div id="name">{props.name || "no name found"}</div>
        <div id="btn-box">
          <FollowButton userId={props.userId} />
        </div>
        <div id="username">@{props.username || "no username found"}</div>
      </div>
    </div>
  );
}

export default UserCard;