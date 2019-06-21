import React, { useState, useEffect } from 'react';
import './WhoToFollow.css';
import UserCard from './UserCard';
import axios from 'axios';

const WhoToFollow = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userListObj = await axios.get('http://localhost:4000/v1/users');
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
        {userData.map(user => <li key={user.id}>
          <UserCard name={user.name} username={user.username} id={user.id} />
          </li>)}
      </ul>
    </div>
  );
}

export default WhoToFollow;