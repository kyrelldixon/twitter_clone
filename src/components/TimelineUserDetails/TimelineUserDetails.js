import React, { useState, useEffect } from 'react';
import { generateRandomIconUrl } from '../../services/randomImageClient';
import { getFollowerCount, getFollowingCount } from '../../services/relationshipClient';

const TimelineUserDetails = ({ user }) => {
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const userIcon = generateRandomIconUrl();
  const { username } = user;

  useEffect(() => {
    const fetchFollowCount = async () => {
      try {
        const followingCountResponse = await getFollowingCount({ username });
        setFollowingCount(followingCountResponse);
        const followerCountResponse = await getFollowerCount({ username });
        setFollowersCount(followerCountResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFollowCount();
  }, [username])
  return (
    <>
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
    </>
  );
}

export default TimelineUserDetails;