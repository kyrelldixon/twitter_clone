import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import LinkBar from '../LinkBar/LinkBar';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import './WhoToFollow.css';

const WhoToFollow = () => {

  const [userData, setUserData] = useState([]);
  const [token,] = useLocalStorage('token', window.localStorage.getItem('token'));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/v1/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    
    getUsers();
  }, [token]);

  return (
    <div>
      <div id="follow-who-header">Who to follow</div>
      <ul id="tweets-ul">
        {userData.map(user => <li key={user.id}>
          <UserCard name={user.name} username={user.username} id={user.id} />
          </li>)}
      </ul>
      <LinkBar text="Show more"/>
    </div>
  );
}

export default WhoToFollow;