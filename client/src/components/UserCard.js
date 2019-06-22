import React from 'react';
import './UserCard.css';
import ActionButton from './ActionButton';
import axios from 'axios';

const UserCard = (props) => {

  const handleRelationshipUpdate = async () => {
    const followInfo = {
      follower: props.currentUserId,
      follwed: props.id
    }
    try {
      await axios.post('http://localhost:4000/v1/relationships', followInfo);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="usercard-wrapper">
      <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
      <div>
        <div id="name">{props.name || "no name found"}</div>
        <div id="btn-box">
          <ActionButton text="Follow" onClick={handleRelationshipUpdate}/>
        </div>
        <div id="username">@{props.username || "no username found"}</div>
      </div>
    </div>
  );
}

export default UserCard;