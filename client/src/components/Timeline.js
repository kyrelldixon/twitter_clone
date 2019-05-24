import React from 'react';
import Nav from './Nav';
import './Timeline.css';

const Timeline = () => (
  <div>
    <Nav />
    <div id="home-bar">Home<i className="far fa-star"></i></div>
    <div id="compose">
      <img alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
      <input type="text" placeholder="What's happening?" />
    </div>
    <ul id="tweets">
    </ul>
  </div>
);

export default Timeline;