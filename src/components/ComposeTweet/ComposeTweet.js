import React, { useState } from 'react';
import { postTweet, getHomeTimeline } from '../../services/tweetClient';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './ComposeTweet.css';

const ComposeTweet = (props) => {
  
  const [tweetText, setTweetText] = useState('');

  const handleSubmitTweet = (e) => {
    const tweet = {
      "tweet": {
        "text": tweetText
      }
    } 
    sendTweet(tweet);
    props.hideModal();
    e.preventDefault();
  }

  const sendTweet = async (tweet) => {
    try {
      await postTweet(tweet);
      reloadTweetData();
      setTweetText('');
      props.handleDisplay(false);
    } catch (error) {
      console.error(error);
    }
  }

  const reloadTweetData = async () => {
    try {
      const timeline = await getHomeTimeline();
      props.setTweetData(timeline);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="modal-bg" className={props.isVisible ? 'showModal' : 'hideModal'} onClick={(event) => {
      if (event.target.id === 'modal-bg') {
        props.hideModal();
      }
    }}>
      <div id="compose-tweet-modal">
        <div id="compose-tweet-head">
          <button id="close-compose" onClick={props.hideModal} ><i className="fas fa-times"></i></button>
          <button id="submit-tweet" onClick={handleSubmitTweet}>Tweet</button>
        </div>
        <div id="compose-tweet-body">
          <img alt="user" src={generateRandomIconUrl()} />
          <textarea id="compose-tweet-message" placeholder="What's happening?"
            value={tweetText} onChange={e => setTweetText(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default ComposeTweet;
