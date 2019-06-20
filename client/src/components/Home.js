import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useForm } from "../hooks/useForm";

import './Home.css';

const Home = ({ history }) => 
{
  const [, setToken] = useLocalStorage('token', window.localStorage.getItem('token'));
  const { values, handleChange, handleSubmit } = useForm(login);

  async function login() {
    try {
      const credentials = {
        email: values.email,
        password: values.password
      }

      const response = await axios.post('http://localhost:4000/v1/sessions', credentials);
      setToken(response.data.data.token)
      history.push('/home');
    } catch (error) {
      console.error(error);
    }
  }

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
            value={values.email} onChange={handleChange}/>
          <input type="password" placeholder="Password"
            value={values.password} onChange={handleChange}/>
          <button className="login-btn" id="small-btn-upper" onClick={handleSubmit}>Log in</button>
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

  export default withRouter(Home);