import React, { useState, useEffect } from 'react';
import Tweet from '../Tweet';
import { getUserTimeline } from '../../services/tweetClient';
import { getUser } from '../../services/userClient';
import { generateRandomIconUrl } from '../../services/randomImageClient';
import { getFollowerCount, getFollowingCount } from '../../services/relationshipClient';

import './UserTimeline.css';

const UserTimeline = (props) => {

  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({});
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const userIcon = generateRandomIconUrl();

  useEffect(() => {
    const fetchFollowCount = async () => {
      try {
        const followingCountResponse = await getFollowingCount({ username: props.match.params.username });
        setFollowingCount(followingCountResponse);
        const followerCountResponse = await getFollowerCount({ username: props.match.params.username });
        setFollowersCount(followerCountResponse);
      } catch (error) {
        console.error(error);
      }
    }
    const fetchUserTweets = async () => {
      try {
        const userTimeline = await getUserTimeline({username: props.match.params.username});
        setTweets(userTimeline);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchUser = async () => {
      try {
        const user = await getUser({username: props.match.params.username});
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchUserTweets();
    fetchUser();
    fetchFollowCount();
  }, [props.match.params.username]);

  return (
    <div id="user-acct">
      <div className="usertl-bg-container">
        <img className="usertl-bg" alt="user background" src="https://picsum.photos/950/300" />
      </div>
      <div id="acct-main">
        <img className="usertl-photo" alt="user" src={userIcon} />
        <div className="usertl-name">{user.name || "no name found"}</div>
        <div className="username">@{user.username || "no username found"}</div>
        {/* <div id="btn-box"><ActionButton text="Edit Profile" /></div> */}
        {/* <div id="user-bio">{user.bio || "no bio found"}</div> */}
        <span className="user-follow-num">{followingCount || 0}</span>
        <span className="user-follow-text">Following</span>
        <span className="user-follow-num">{followersCount || 0}</span>
        <span className="user-follow-text">Follower{followersCount === 1 ? "" : "s"}</span>
        {/* <div id="user-tabs">
          <button className="acct-tab">Tweets</button>
          <button className="acct-tab">Tweets & replies</button>
          <button className="acct-tab">Media</button>
          <button className="acct-tab">Likes</button>
        </div> */}
      </div>
      <ul id="user-tweets-ul">
        {tweets.map(tweet =>
          <li key={tweet.tweet_id}>
            <Tweet tweet={tweet} setTweets={setTweets}/>
          </li>)}
      </ul>
    </div>
  );
}

export default UserTimeline;
