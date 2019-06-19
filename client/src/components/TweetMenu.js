import React from 'react';
import './TweetMenu.css';

const TweetMenu = (props) => {

  return (
      <div id="tweet-menu-box">
        <button class="tweet-menu-btn">View Tweet Activity</button>
        <button class="tweet-menu-btn">Embed Tweet</button>
        <button class="tweet-menu-btn">Pin to your profile</button>
        <button class="tweet-menu-btn" id="delete-tweet">Delete</button>
      </div>
  );
}

export default TweetMenu;