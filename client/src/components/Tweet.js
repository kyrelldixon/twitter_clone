import React from 'react';
import './Tweet.css';

const Tweet = (props) => {
  return (
      <div id="tweet-wrapper">
          <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          <div id="tweet-container">
            <div id="name">{props.name || "no name found"}</div>
            <div id="username">@{props.username || "no username found"}</div>
            <div id="time-diff"> · {props.timeDiff || "--m"}</div>
            <button><i class="fas fa-chevron-down"></i></button>
            <div id="tweet-message">{props.text_content || "no message found"}</div>
          </div>
      </div>
  );
}

export default Tweet;