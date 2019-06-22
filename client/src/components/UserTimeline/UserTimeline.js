import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActionButton from '../ActionButton';
import Tweet from '../Tweet';
import './UserTimeline.css';

const UserTimeline = (props) => {

  const [userTweets, setUserTweets] = useState([]);

  useEffect(() => {
    const getUserTweets = async () => {
      try {
        const tweetObj = await axios.get('http://localhost:4000/v1/tweets');
        setUserTweets(tweetObj.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    
    getUserTweets();
  }, []);

  return (
    <div id="user-acct">
      <div>
        <img id="user-bg" alt="user background" src="https://www.solidbackgrounds.com/images/950x350/950x350-cadet-grey-solid-color-background.jpg"/>
      </div>
      <div id="acct-main">
        <img id="user-photo" alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <div id="name">{props.name || "no name found"}</div>
        <div id="username">@{props.username || "no username found"}</div>
        <div id="btn-box"><ActionButton text="Edit Profile" /></div>
        <div id="user-bio">{props.bio || "no bio found"}</div>
        <div id="following-count">{props.following_count || "0"} Following </div>
        <div id="follower-count">{props.follower_count || "0"} Followers</div>
        <div id="user-tabs">
          <button className="acct-tab">Tweets</button>
          <button className="acct-tab">Tweets & replies</button>
          <button className="acct-tab">Media</button>
          <button className="acct-tab">Likes</button>
        </div>
      </div>
      <ul id="user-tweets-ul">
        {userTweets.map(tweet => <li key={tweet.tweet_id}>
          <Tweet name={tweet.user.name} username={tweet.user.username}
            text={tweet.text} id={tweet.tweet_id} setTweetData={setUserTweets}/>
        </li>)}
      </ul>
    </div>
  );
}

export default UserTimeline;