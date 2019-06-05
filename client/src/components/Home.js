import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="wrapper">

      <section id="left-half">
        <h2><i className="fas fa-search"></i>Follow your interests.</h2>
        <h2><i className="fas fa-users"></i>Hear what people are talking about.</h2>
        <h2><i className="far fa-comment"></i>Join the conversation.</h2>
      </section>

      <i className="fab fa-twitter" id="bird-bg"></i>

      <section id="right-half">
        <div id="top-login">
          <input type="text" placeholder="Phone, email or username"
            value={username} onChange={e => setUsername(e.target.value)}/>
          <input type="text" placeholder="Password"
            value={password} onChange={e => setPassword(e.target.value)}/>
          <button className="login-btn" id="small-btn-upper">Log in</button>
        </div>
        <Link to="/" id="forgot-pass">Forgot password?</Link>

        <div id="container">
          <i className="fab fa-twitter" id="home-logo"></i>
          <Link to="login"><button className="login-btn" id="small-btn-lower">Log in</button></Link>
          <h1>See what's happening in the world right now</h1>
          <h3>Join Twitter today.</h3>
          <Link to="signup"><button id="signup-btn">Sign Up</button></Link>
          <Link to="login"><button className="login-btn">Log in</button></Link>
        </div>
      </section>

      <footer>
        <ul id="home-footer-list">
          <li>About</li>
          <li>Help Center</li>
          <li>Blog</li>
          <li>Status</li>
          <li>Jobs</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Ads Info</li>
          <li>Brand</li>
          <li>Apps</li>
          <li>Advertise</li>
          <li>Marketing</li>
          <li>Businesses</li>
          <li>Developers</li>
          <li>Directory</li>
          <li>Settings</li>
          <span>© 2019 Twitter Clone</span>
        </ul>
      </footer>

    </div>
  );
}

  export default Home;