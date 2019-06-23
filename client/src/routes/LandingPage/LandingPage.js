import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import authClient from '../../services/authClient';
import { useForm } from '../../hooks/useForm';

import './LandingPage.css';

const LandingPage = ({ history }) => 
{
  const { values, handleChange, handleSubmit } = useForm(login);

  async function login() {
      const credentials = {
        email: values.email,
        password: values.password
      }

      const onSuccess = () => {
        history.push('/home');
      }

      const onFailure = (error) => {
        console.error(error);
      }
      authClient.login(credentials, onSuccess, onFailure);
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
            value={values.email || ''} onChange={handleChange}/>
          <input type="password" placeholder="Password"
            value={values.password || ''} onChange={handleChange}/>
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

    </div>
  );
}

  export default withRouter(LandingPage);