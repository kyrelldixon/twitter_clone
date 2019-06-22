import React from 'react';
import './ActionButton.css';

const ActionButton = (props) => {

  return (
    <button id="action-btn">
      {props.text}
    </button>
  );
}

export default ActionButton;