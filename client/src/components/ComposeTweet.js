import React, { useState } from 'react';
import axios from 'axios';

import './ComposeTweet.css';

const ComposeTweet = (props) => {
  
  const [tweetText, setTweetText] = useState('');

  const handleSubmitTweet = (e) => {
    const postObj = {
      "tweet": {
        "text": tweetText
      }
    } 
    sendTweet(postObj);
    e.preventDefault();
  }

  const sendTweet = async (postObj) => {
    try {
      const response = await axios.post('http://localhost:4000/v1/tweets', postObj);
      console.log(response);
    } catch (error) {
      console.log(error);
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
          <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          <textarea id="compose-tweet-message" placeholder="What's happening?"
            value={tweetText} onChange={e => setTweetText(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default ComposeTweet;