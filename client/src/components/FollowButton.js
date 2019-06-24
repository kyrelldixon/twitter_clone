import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FollowButton.css';

const FollowButton = (props) => {
  const [followButtonText, setfollowButtonText] = useState('Follow');
  const [btnClass, setBtnClass] = useState('follow');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (props.isFollowed) {
      setfollowButtonText("Following");
      setBtnClass('following');
    } else {
      setfollowButtonText("Follow");
      setBtnClass('follow');
    }
  }, [props.isFollowed]);
  
  const handleRelationshipUpdate = async () => {
    try {
      if (!props.isFollowed) {
        await axios.post(`http://localhost:4000/v1/relationships?user_id=${props.userId}`, {}, {
          headers: {Authorization: `Bearer ${token}`}
        });
        props.setIsFollowed(true);
      } else {
        await axios.delete(`http://localhost:4000/v1/relationships?user_id=${props.userId}`, {
          headers: {Authorization: `Bearer ${token}`}
        });
        props.setIsFollowed(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleMouseEnter = (e) => {
    if (props.isFollowed)
      setfollowButtonText('Unfollow');
  }

  const handleMouseLeave = (e) => {
    if (props.isFollowed)
      setfollowButtonText('Following');
  }

  return (
    <button className={`follow-btn ${btnClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleRelationshipUpdate}>{followButtonText}</button>
  );
}

export default FollowButton;