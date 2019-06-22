import React from 'react';
import ActionButton from './ActionButton';
import './UserAccount.css';

const UserAccount = (props) => (
  <div id="user-acct">
    <div>
      <img id="user-bg" alt="user background" src="https://www.solidbackgrounds.com/images/950x350/950x350-cadet-grey-solid-color-background.jpg"/>
    </div>
    <img id="user-photo" alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
    <div id="name">{props.name || "no name found"}</div>
    <div id="username">@{props.username || "no username found"}</div>
    <div id="btn-box"><ActionButton text="Edit Profile" /></div>
    <div id="user-bio">{props.bio || "no bio found"}</div>
    <div id="following-count">{props.following_count || "0"} Following </div>
    <div id="follower-count">{props.follower_count || "0"} Followers</div>
    <div id="user-tabs">
      <button className="acct-tab">Tweets</button>
      <button className="acct-tab">Tweets & replies</button>
      <button className="acct-tab">Media</button>
      <button className="acct-tab">Likes</button>
    </div>
  </div>
);

export default UserAccount;