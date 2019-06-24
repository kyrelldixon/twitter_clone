import React, { useState, useEffect } from 'react';
import './UserCard.css';
import FollowButton from './FollowButton';

const UserCard = (props) => {

  const [isFollowed, setIsFollowed] = useState(false);
  useEffect(() => {
    const checkFollowed = props.userList.includes(props.userId);
    if (checkFollowed) {
      setIsFollowed(true);
    }
  }, [isFollowed]);

  return (
    <div id="usercard-wrapper">
      <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
      <div>
        <div id="name">{props.name || "no name found"}</div>
        <div id="btn-box">
          <FollowButton userId={props.userId} isFollowed={isFollowed} setIsFollowed={setIsFollowed}/>
        </div>
        <div id="username">@{props.username || "no username found"}</div>
      </div>
    </div>
  );
}

export default UserCard;