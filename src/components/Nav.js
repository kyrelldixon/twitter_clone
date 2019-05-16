import React from 'react';

const Nav = () => (
  <nav>
    <div className="container">
      <ul>
        <li> <a href="#1" className="nav-link"><i className="fab fa-twitter"></i> Home</a> </li>
        <li> <a href="#2" className="nav-link">About</a> </li>
        <li id="nav-right"> <a href="#3">Language: English</a> </li>
      </ul>
    </div>
  </nav>
)

export default Nav;