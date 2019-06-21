import React from 'react';
import './UserCard.css';

const UserCard = (props) => {

  return (
    <div id="usercard-wrapper">
      <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
      <div>
        <div id="name">{props.name || "no name found"}</div>
        <div id="username">@{props.username || "no username found"}</div>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default UserCard;