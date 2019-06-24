import React from 'react';
import TweetMenu from '../TweetMenu/TweetMenu';
import { useBoolean } from '../../hooks';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './Tweet.css';

const Tweet = (props) => {
  const [isVisible, showMenu, hideMenu] = useBoolean(false);

  return (
      <div id="tweet-wrapper">
          <img alt="user" src={generateRandomIconUrl()} />
          <div id="tweet-container">
            <div id="name">{props.name}</div>
            <div id="username">@{props.username || "no username found"}</div>
            <div id="time-diff"> · {props.timeDiff || "--m"}</div>
            <button id="tweet-menu-btn" onClick={showMenu}>
              <i className="fas fa-chevron-down"></i>
            </button>
            <TweetMenu tweetId={props.id} isVisible={isVisible}
              hideMenu={hideMenu} showMenu={showMenu} setTweetData={props.setTweetData}/>
            <div id="tweet-message">{props.text || "no message found"}</div>
            <div id="tweet-foot">
              <i className="far fa-comment"> {props.commentCount || ""}</i>
              <i className="fas fa-retweet"> {props.retweetCount || ""}</i>
              <i className="far fa-heart"> {props.likeCount || ""}</i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
      </div>
  );
}

export default Tweet;