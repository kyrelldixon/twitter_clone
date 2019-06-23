import React, { useRef, useEffect } from 'react';
import { deleteTweet, getTweets } from '../../services/tweetClient';

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
      await deleteTweet({ tweetId: props.tweetId })
      reloadTweetData();
    } catch (error) {
      console.log(error);
    }
  }

  const reloadTweetData = async () => {
    try {
      // TODO: add correct get tweets function call. Will depend on route
      const response = await getTweets();
      props.setTweetData(response.data.data.reverse());
    } catch (error) {
      console.log(error);
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

export default TweetMenu;