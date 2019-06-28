import React from 'react';

const ComposeButton = ({ className, action }) => {
  return (
    <button className={className} onClick={action}>+<i className="fas fa-feather"></i></button>
  );
}

export default ComposeButton;