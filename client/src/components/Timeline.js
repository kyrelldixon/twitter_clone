import React, { useState, useEffect } from 'react';
import './Timeline.css';
import Tweet from './Tweet';
import axios from 'axios';

const Timeline = () => {

  const [tweetData, setTweetData] = useState([]);

  useEffect( () => {
    const getTweets = async () => {
      try {
        const tweetObj = await axios('http://localhost:4000/api/tweets');
        setTweetData(tweetObj.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    
    getTweets();
  }, []);

  return (
    <div>
      <div id="home-bar">Home<i className="far fa-star"></i></div>
      <div id="compose">
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <div id="input-box">What's happening?</div>
        <i className="far fa-image"></i>
        <i className="far fa-file-video"></i>
        <i className="far fa-chart-bar"></i>
      </div>
      <ul id="tweets-ul">
        {tweetData.reverse().map(tweet => <li key={tweet.tweet_id}><Tweet userID={tweet.user_id} text={tweet.text}/></li>)}
      </ul>
    </div>
  );
}

export default Timeline;