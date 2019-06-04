import React, { useState } from 'react';
import Nav from './Nav';
import Tweet from './Tweet';
import Header from './Header';
import './Timeline.css';


import fakeTweets from '../tweets.json';


const Timeline = () => {
  const [tweets, setTweets] = useState(fakeTweets)

  const renderTweets = (tweets) => {
    return tweets.data.map(tweet => <Tweet tweet={tweet}/>)
  }

  const refreshTweets = () => {
    setTweets({
      "data": [
        {"text_content": "new tweets"}
      ]
    })
  }

  return (
    <div>
      <Nav />
      <Header text="Home" />
      <div id="compose">
        <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <input type="text" placeholder="What's happening?" />
      </div>
      <ul id="tweets">
        { renderTweets(tweets) }
      </ul>
      <button onClick={refreshTweets}>Refresh Tweets</button>
    </div>
  );
}

export default Timeline;