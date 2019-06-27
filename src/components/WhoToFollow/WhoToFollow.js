import React, { useState, useEffect } from 'react';
import UserCard from '../UserCard';
import ShowMoreButton from '../ShowMoreButton';
import { getUsers } from '../../services/userClient';
import { useAuth, useBoolean } from '../../hooks';

import './WhoToFollow.css';

const WhoToFollow = () => {

  const [users, setUsers] = useState([]);
  const [isShowingMore, showMore, showLess] = useBoolean(false);
  const [{ user }, ] = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
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
        {users.slice(0, isShowingMore ? users.length : 3)
          .map(u => {
          return (
            (user.user_id !== u.id) &&
              <li key={u.id}>
                <UserCard user={u} />
              </li>
          )
        })}
      </ul>
      <ShowMoreButton
        isShowingMore={isShowingMore}
        showMore={showMore}
        showLess={showLess} />
    </div>
  );
}

export default WhoToFollow;