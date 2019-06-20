import React, { useRef, useEffect } from 'react';
import './TweetMenu.css';

const TweetMenu = (props) => {
  
  const node = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    }
   }, []);

   const handleClose = e => {
    console.log(node.current);
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    props.handleDisplay(false);
  };

  return (
      <div ref={node} id="tweet-menu-box" className={props.display ? "showMenu" : "hideMenu"}>
        <button className="tweet-menu-btn">View Tweet Activity</button>
        <button className="tweet-menu-btn">Embed Tweet</button>
        <button className="tweet-menu-btn">Pin to your profile</button>
        <button className="tweet-menu-btn" id="delete-tweet">Delete</button>
      </div>
  );
}

export default TweetMenu;