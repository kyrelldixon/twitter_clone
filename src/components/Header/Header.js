import React from 'react';

const Header = ({ text, iconClassName }) => (
  <div id="home-bar">{text}<i className={iconClassName || ''}></i></div>
)

export default Header;