import React, { useState, useEffect } from 'react';
import './WhoToFollow.css';
import UserCard from './UserCard';
import axios from 'axios';
import LinkBar from './LinkBar';

const WhoToFollow = () => {

  const [userData, setUserData] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const currentUserId = Number.parseInt(localStorage.getItem('user_id'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getFollowing = async () => {
      try {
        const followingObj = await axios.get('http://localhost:4000/v1/following/ids', {
          headers: {Authorization: `Bearer ${token}`}
        });
        setFollowingList(followingObj.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    const getUsers = async () => {
      try {
        const userListObj = await axios.get('http://localhost:4000/v1/users', {
          headers: {Authorization: `Bearer ${token}`}
        });
        setUserData(userListObj.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFollowing();
    getUsers();
  }, [token]);
  
  return (
    <div>
      <div id="follow-who-header">Who to follow</div>
      <ul id="tweets-ul">
        {userData.map(user => {
          if (user.id !== currentUserId) {
            return <li key={user.id}><UserCard name={user.name} username={user.username} userId={user.id}
              userList={followingList}/></li>;
          }
        })}
      </ul>
      <LinkBar text="Show more"/>
    </div>
  );
}

export default WhoToFollow;