import React, { useState, useEffect } from 'react';
import Tweet from '../Tweet/Tweet';
import ComposeTweet from '../ComposeTweet/ComposeTweet';
import { getHomeTimeline } from '../../services/tweetClient';
import { useBoolean } from '../../hooks';

import './Timeline.css';

const Timeline = () => {

  const [tweetData, setTweetData] = useState([]);
  const [isVisible, showModal, hideModal] = useBoolean(false);

  useEffect( () => {
    const getTweets = async () => {
      try {
        const timeline = await getHomeTimeline();
        setTweetData(timeline);
      } catch (error) {
        console.log(error);
      }
    }
    
    getTweets();
  }, []);

  return (
    <div>
      <ComposeTweet isVisible={isVisible} hideModal={hideModal} />
      <div id="home-bar">Home<i className="far fa-star"></i></div>
      <div id="compose" onClick={showModal}>
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <div id="input-box">What's happening?</div>
        <i className="far fa-image"></i>
        <i className="far fa-file-video"></i>
        <i className="far fa-chart-bar"></i>
      </div>
      <ul id="tweets-ul">
        {tweetData.map(tweet => <li key={tweet.tweet_id}>
          <Tweet name={tweet.user.name} username={tweet.user.username}
            text={tweet.text} id={tweet.tweet_id} setTweetData={setTweetData}/>
          </li>)}
      </ul>
    </div>
  );
}

export default Timeline;