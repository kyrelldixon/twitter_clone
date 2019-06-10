import React from 'react';
import './ComposeTweet.css';

const ComposeTweet = () => {
  return (
    <div id="compose-tweet-modal">
      <div id="compose-tweet-head">
        <button id="close-compose"><i className="fas fa-times"></i></button>
        <button id="submit-tweet">Tweet</button>
      </div>
      <div id="compose-tweet-body">
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <textarea id="compose-tweet-message" placeholder="What's happening?"/>
      </div>
    </div>
  );
}

export default ComposeTweet;