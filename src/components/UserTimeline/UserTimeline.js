import React, { useState, useEffect } from 'react';
import Tweet from '../Tweet';
import TimelineUserDetails from '../TimelineUserDetails/TimelineUserDetails';
import { getUserTimeline } from '../../services/tweetClient';
import { getUser } from '../../services/userClient';

import './UserTimeline.css';

const UserTimeline = (props) => {
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);
  
  const { username } = props.match.params;
  useEffect(() => {
    const fetchUserTweets = async () => {
      try {
        const userTimeline = await getUserTimeline({ username });
        setTweets(userTimeline);
      } catch (error) {
        console.error(error);
      }
    }

    const fetchUser = async () => {
      try {
        const user = await getUser({ username });
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchUserTweets();
    fetchUser();
  }, [username]);

  return (
    <div id="user-acct">
      <TimelineUserDetails user={user}/>
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
