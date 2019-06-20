import React, { useRef, useEffect } from 'react';
import './TweetMenu.css';
import axios from 'axios';

const TweetMenu = (props) => {
  
  const node = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    }
  }, []);
  
  const tweetId = 0;
  const handleDeleteTweet = async () => {
    try {
      await axios.delete(`http://localhost:4000/v1/tweets/${tweetId}`);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    props.handleDisplay(false);
  };

  return (
      <div ref={node} id="tweet-menu-box" className={props.display ? "showMenu" : "hideMenu"}>
        <button className="tweet-menu-btn">View Tweet Activity</button>
        <button className="tweet-menu-btn">Embed Tweet</button>
        <button className="tweet-menu-btn">Pin to your profile</button>
        <button className="tweet-menu-btn" id="delete-tweet" onClick={handleDeleteTweet}>Delete</button>
      </div>
  );
}

export default TweetMenu;