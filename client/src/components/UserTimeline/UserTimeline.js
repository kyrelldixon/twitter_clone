import React, { useState, useEffect } from 'react';
import ActionButton from '../ActionButton';
import Tweet from '../Tweet';
import { getUserTimeline } from '../../services/tweetClient';
import { getUser } from '../../services/userClient';
import { generateRandomIconUrl } from '../../services/randomImageClient';

import './UserTimeline.css';

const UserTimeline = (props) => {

  const [userTweets, setUserTweets] = useState([]);
  const [user, setUser] = useState({});
  const userIcon = generateRandomIconUrl();

  useEffect(() => {
    const fetchUserTweets = async () => {
      try {
        const userTimeline = await getUserTimeline({username: props.match.params.username});
        setUserTweets(userTimeline);
      } catch (error) {
        console.log(error);
      }
    }

    const fetchUser = async () => {
      try {
        const user = await getUser({username: props.match.params.username});
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchUserTweets();
    fetchUser();
  }, [props.match.params.username]);

  return (
    <div id="user-acct">
      <div>
        <img id="user-bg" alt="user background" src="https://picsum.photos/950/300" />
      </div>
      <div id="acct-main">
        <img id="user-photo" alt="user" src={userIcon} />
        <div id="name">{user.name || "no name found"}</div>
        <div id="username">@{user.username || "no username found"}</div>
        <div id="btn-box"><ActionButton text="Edit Profile" /></div>
        <div id="user-bio">{user.bio || "no bio found"}</div>
        <div id="following-count">{user.following_count || "0"} Following </div>
        <div id="follower-count">{user.follower_count || "0"} Followers</div>
        <div id="user-tabs">
          <button className="acct-tab">Tweets</button>
          <button className="acct-tab">Tweets & replies</button>
          <button className="acct-tab">Media</button>
          <button className="acct-tab">Likes</button>
        </div>
      </div>
      <ul id="user-tweets-ul">
        {userTweets.map(tweet => <li key={tweet.tweet_id}>
          <Tweet name={tweet.user.name} icon={userIcon} username={tweet.user.username}
            text={tweet.text} id={tweet.tweet_id} setTweetData={setUserTweets}/>
        </li>)}
      </ul>
    </div>
  );
}

export default UserTimeline;