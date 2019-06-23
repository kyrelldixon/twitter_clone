import React, { useState, useEffect } from 'react';
import './WhoToFollow.css';
import UserCard from './UserCard';
import axios from 'axios';
import LinkBar from './LinkBar';

const WhoToFollow = () => {

  const [userData, setUserData] = useState([]);
  const currentUserId = Number.parseInt(localStorage.getItem('user_id'));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const userListObj = await axios.get('http://localhost:4000/v1/users', {
          headers: {Authorization: `Bearer ${token}`}
        });
        setUserData(userListObj.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    
    getUsers();
  }, []);

  return (
    <div>
      <div id="follow-who-header">Who to follow</div>
      <ul id="tweets-ul">
        {userData.map(user => {
          if (user.id !== currentUserId)
            return <li key={user.id}><UserCard name={user.name} username={user.username} id={user.id} /></li>;
        })}
      </ul>
      <LinkBar text="Show more"/>
    </div>
  );
}

export default WhoToFollow;