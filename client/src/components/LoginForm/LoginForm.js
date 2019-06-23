import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import authClient from '../../services/authClient';
import { useForm } from '../../hooks/useForm';

import './LoginForm.css';

const LoginForm = ({ history }) => {

  const { values, handleChange, handleSubmit } = useForm(login);
  
  async function login() {
    const credentials = {
      email: values.email,
      password: values.password
    };

    try {
      const userId = await authClient.login(credentials)
      const user = await authClient.getCurrentUser();
      if (userId === user.id) console.log('user is',user);
    } catch (error) {
      alert(error)
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