import React from 'react';
import TimeAgo from 'timeago-react';
import { Link } from 'react-router-dom';
import TweetMenu from '../TweetMenu';
import { useBoolean } from '../../hooks';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './Tweet.css';

const Tweet = ({ tweet, setTweets }) => {
  const [isVisible, showMenu, hideMenu] = useBoolean(false);

  return (
    <div id="tweet-wrapper">
      <img alt="user" src={tweet.user.icon || generateRandomIconUrl()} />
      <div id="tweet-container">
        <Link to={tweet.user.username} id="name">{tweet.user.name}</Link>
        <Link to={tweet.user.username} id="username">@{`${tweet.user.username} · ` || "no username found"}</Link>
        <TimeAgo id="time-diff" datetime={tweet.created_at} />
        <button id="tweet-menu-btn" onClick={showMenu}>
          <i className="fas fa-chevron-down"></i>
        </button>
        <TweetMenu tweetId={tweet.tweet_id} isVisible={isVisible}
          hideMenu={hideMenu} showMenu={showMenu} setTweets={setTweets}/>
        <div id="tweet-message">{tweet.text || "no message found"}</div>
        <div id="tweet-foot">
          <i className="far fa-comment"> {tweet.commentCount || ""}</i>
          <i className="fas fa-retweet"> {tweet.retweetCount || ""}</i>
          <i className="far fa-heart"> {tweet.likeCount || ""}</i>
          <i className="far fa-share-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Tweet;