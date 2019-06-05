import React from 'react';

const Tweet = (props) => {
  return (
      <div>
          <div id="tweet-head">
            <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
            <div id="name">{props.name}</div>
            <div id="username">{props.username}</div>
            <button><i class="fas fa-chevron-down"></i></button>
          </div>
          <div>
            <div id="tweet-message">{props.text_content}</div>
          </div>
      </div>
  );
}

export default Tweet;