import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import './LoginForm.css';

const LoginForm = ({ history }) => {
  
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
    <div className="container" id="main-box">

        <form id="login" onSubmit={handleSubmit}>
          <h1 id="login-header">Log in to Twitter</h1>
        
          <input className="login-form" type="email" placeholder="Email" 
            name="email" value={values.email || ''} onChange={handleChange} required />
          
          <input className="login-form" type="password" placeholder="Password"
            name="password" value={values.password || ''} onChange={handleChange} required />

          <button className="login-options" type="submit">Log in</button>
          <input className="login-options" type="checkbox" />
          <p className="login-options">Remember me · <Link to="/">Forgot password?</Link></p>
        </form>

        <section id="signup-links">
          <p>New to Twitter? <Link to="/signup">Sign up now »</Link></p>
          <p>Already using Twitter via text message? <Link to="/">Activate your account »</Link></p>
        </section>

      </div>
  );
}

export default withRouter(LoginForm);