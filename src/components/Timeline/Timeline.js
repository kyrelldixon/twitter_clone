import React, { useState, useEffect } from 'react';
import Tweet from '../Tweet';
import ComposeTweet from '../ComposeTweet';
import ComposeButton from './ComposeButton';
import { getHomeTimeline } from '../../services/tweetClient';
import { useBoolean } from '../../hooks';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './Timeline.css';

const Timeline = () => {

  const [tweets, setTweets] = useState([]);
  const [isVisible, showModal, hideModal] = useBoolean(false);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const timeline = await getHomeTimeline();
        setTweets(timeline);
      } catch (error) {
        console.error(error);
      }
    }
    
    getTweets();
  }, []);

  return (
    <div>
      <ComposeTweet isVisible={isVisible} hideModal={hideModal} setTweets={setTweets} />
      <div id="home-bar-tl" className="home-bar">Home<i className="far fa-star"></i></div>
      <ComposeButton className="compose-tweet-btn" action={showModal} />
      <div id="compose" onClick={showModal}>
        <img alt="user" src={generateRandomIconUrl()} />
        <div id="input-box">What's happening?</div>
        <i className="far fa-image"></i>
        <i className="far fa-file-video"></i>
        <i className="far fa-chart-bar"></i>
      </div>
      <ul id="tweets-ul">
        {tweets.map(tweet => 
          <li key={tweet.tweet_id}>
            <Tweet tweet={tweet} setTweets={setTweets}/>
          </li>)}
      </ul>
    </div>
  );
}

export default Timeline;