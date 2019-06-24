import React, { useState, useEffect } from 'react';
import { follow, unfollow, isFollowing as getIsFollowing } from '../../services/relationshipClient';

import './FollowButton.css';

const FollowButton = ({ userId }) => {
  const [followButtonText, setFollowButtonText] = useState('Follow');
  const [btnClass, setBtnClass] = useState('follow');
  const [isFollowing, setIsFollowing] = useState();

  useEffect(() => {
    const fetchIsFollowing = async () => {
      try {
        const response = await getIsFollowing({user_id: userId});
        setIsFollowing(response.data.connections.following);
      } catch (error) {
        console.error(error)
      }
    }
    
    if (isFollowing) {
      setFollowButtonText("Following");
      setBtnClass('following');
    } else {
      setFollowButtonText("Follow");
      setBtnClass('follow');
    }

    fetchIsFollowing();
  }, [isFollowing, userId]);
  
  const handleRelationshipUpdate = async () => {
    try {
      if (!isFollowing) {
        await follow({user_id: userId});
        setIsFollowing(!isFollowing);
      } else {
        await unfollow({user_id: userId});
        setIsFollowing(!isFollowing);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleMouseEnter = (e) => {
    if (isFollowing)
      setFollowButtonText('Unfollow');
  }

  const handleMouseLeave = (e) => {
    if (isFollowing)
      setFollowButtonText('Following');
  }

  return (
    <button
      className={`follow-btn ${btnClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleRelationshipUpdate}>
      {followButtonText}
    </button>
  );
}

export default FollowButton;