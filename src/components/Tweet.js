import React from 'react';

const Tweet = ({ tweet }) => (
  <div>
    <b>{tweet.username}</b>
    <p>{tweet.content}</p>
  </div>
);

export default Tweet;