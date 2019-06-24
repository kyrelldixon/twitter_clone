import React, { useState, useEffect } from 'react';
import UserCard from '../UserCard';
import LinkBar from '../LinkBar/LinkBar';
import { getUsers } from '../../services/userClient';

import './WhoToFollow.css';

const WhoToFollow = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUserData(users);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);
  
  return (
    <div>
      <div id="follow-who-header">Who to follow</div>
      <ul id="tweets-ul">
        {userData.map(user => {
          return (
            <li key={user.id}>
              <UserCard name={user.name} username={user.username} userId={user.id}/>
            </li>
          )
        })}
      </ul>
      <LinkBar text="Show more"/>
    </div>
  );
}

export default WhoToFollow;