import React, { useState, useEffect } from 'react';
import Nav from './Nav';
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
      <Nav />
      <div id="home-bar">Home<i className="far fa-star"></i></div>
      <div id="compose">
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <input type="text" placeholder="What's happening?" />
      </div>
      <ul id="tweets-ul">
        {tweetData.map(tweet => <li key={tweet.tweet_id}><Tweet userID={tweet.user_id} text={tweet.text}/></li>)}
      </ul>
    </div>
  );
}

export default Timeline;