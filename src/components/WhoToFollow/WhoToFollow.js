import React, { useState, useEffect } from 'react';
import UserCard from '../UserCard';
import LinkBar from '../LinkBar';
import { getUsers } from '../../services/userClient';
import { useAuth } from '../../hooks';

import './WhoToFollow.css';

const WhoToFollow = () => {

  const [userData, setUserData] = useState([]);
  const [{ user }, ] = useAuth();

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
        {userData.map(u => {
          return (
            (user.user_id !== u.id) &&
              <li key={u.id}>
                <UserCard name={u.name} username={u.username} userId={u.id}/>
              </li>
          )
        })}
      </ul>
      <LinkBar text="Show more"/>
    </div>
  );
}

export default WhoToFollow;