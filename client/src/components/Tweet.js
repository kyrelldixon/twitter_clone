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
            <button><i className="fas fa-chevron-down"></i></button>
            <div id="tweet-message">{props.text_content || "no message found"}</div>
            <div id="tweet-foot">
              <i className="far fa-comment"> {props.commentCount || ""}</i>
              <i className="fas fa-retweet"> {props.retweetCount || ""}</i>
              <i className="far fa-heart"> {props.likeCount || ""}</i>
              <i className="far fa-share-square"> {props.share || ""}</i>
            </div>
          </div>
      </div>
  );
}

export default Tweet;