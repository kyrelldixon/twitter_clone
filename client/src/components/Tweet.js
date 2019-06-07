import React, { useState, useEffect } from 'react';
import './Tweet.css';
import axios from 'axios';

const Tweet = (props) => {
  const [nameText, setNameText] = useState('No name found');

  useEffect( () => {
    const getName = async () => {
      try {
        const nameObj = await axios(`http://localhost:4000/api/users/${props.userID}`);
        setNameText(nameObj.data.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    
    getName();
  }, [props.userID]);

  return (
      <div id="tweet-wrapper">
          <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          <div id="tweet-container">
            <div id="name">{nameText}</div>
            <div id="username">@{props.username || "no username found"}</div>
            <div id="time-diff"> · {props.timeDiff || "--m"}</div>
            <button><i className="fas fa-chevron-down"></i></button>
            <div id="tweet-message">{props.text || "no message found"}</div>
            <div id="tweet-foot">
              <i className="far fa-comment"> {props.commentCount || ""}</i>
              <i className="fas fa-retweet"> {props.retweetCount || ""}</i>
              <i className="far fa-heart"> {props.likeCount || ""}</i>
              <i className="far fa-share-square"></i>
            </div>
          </div>
      </div>
  );
}

export default Tweet;