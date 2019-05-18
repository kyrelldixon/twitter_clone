import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="wrapper">

      <section id="left-half">
        <h2><i className="fas fa-search"></i>Follow your interests.</h2>
        <h2><i className="fas fa-users"></i>Hear what people are talking about.</h2>
        <h2><i className="far fa-comment"></i>Join the conversation.</h2>
      </section>

      <i className="fab fa-twitter" id="bird-bg"></i>

      <section id="right-half">
        <div id="top-login">
          <input type="text" placeholder="Phone, email or username" />
          <input type="text" placeholder="Password" />
          <Link to="login"><button className="login-btn" id="small-btn-upper">Log in</button></Link>
        </div>
        <a href="/" id="forgot-pass">Forgot password?</a>

        <div id="container">
          <i className="fab fa-twitter" id="home-logo"></i>
          <Link to="login"><button className="login-btn" id="small-btn-lower">Log in</button></Link>
          <h1>See what's happening in the world right now</h1>
          <h3>Join Twitter today.</h3>
          <Link to="signup"><button id="signup-btn">Sign Up</button></Link>
          <Link to="login"><button className="login-btn">Log in</button></Link>
        </div>
      </section>

    </div>
  );

  export default Home;