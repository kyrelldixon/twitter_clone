import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { deleteTweet, getHomeTimeline, getUserTimeline } from '../../services/tweetClient';

import './TweetMenu.css';

const TweetMenu = (props) => {
  
  const node = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    }
    //eslint-disable-next-line
  }, []);
  
  const handleDeleteTweet = async () => {
    try {
      await deleteTweet({ tweet_id: props.tweetId })
      reloadTweetData();
    } catch (error) {
      console.error(error);
    }
  }

  const reloadTweetData = async () => {
    try {
      let tweets = [];
      if (props.location.pathname === "/home") {
        tweets = await getHomeTimeline();
      } else {
        tweets = await getUserTimeline({
          username: props.match.params.username
        });
      }
      props.setTweets(tweets);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClose = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    props.hideMenu();
  };

  return (
      <div ref={node} id="tweet-menu-box" className={props.isVisible ? "showMenu" : "hideMenu"}>
        <button className="tweet-menu-btn">View Tweet Activity</button>
        <button className="tweet-menu-btn">Embed Tweet</button>
        <button className="tweet-menu-btn">Pin to your profile</button>
        <button className="tweet-menu-btn" id="delete-tweet" onClick={handleDeleteTweet}>Delete</button>
      </div>
  );
}

export default withRouter(TweetMenu);