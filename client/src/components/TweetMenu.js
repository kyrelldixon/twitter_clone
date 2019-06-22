import React, { useRef, useEffect } from 'react';
import axios from 'axios';

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
      await axios.delete(`http://localhost:4000/v1/tweets/${props.tweetId}`);
      reloadTweetData();
    } catch (error) {
      console.log(error);
    }
  }

  const reloadTweetData = async () => {
    try {
      const tweetDataObj = await axios.get('http://localhost:4000/v1/tweets');
      props.setTweetData(tweetDataObj.data.data.reverse());
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