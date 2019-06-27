import React from 'react';

import './ShowMoreButton.css';

const ShowMoreButton = ({ isShowingMore, showMore, showLess }) => {
  
  return (
    <div
      onClick={isShowingMore ? showLess : showMore} 
      className="show-more">{isShowingMore ? "Show Less": "Show More"}</div>
  )
}

export default ShowMoreButton;