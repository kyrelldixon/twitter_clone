import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Nav";
import './LoginForm.css';
import axios from 'axios';

const LoginForm = ({ history }) => 

{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const credentials = {
      email: username,
      password: password
    }

    authenticateUser(credentials);
    e.preventDefault();
  }

  const authenticateUser = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:4000/v1/sessions', credentials);
      console.log(response);
      history.push('/userhome');
    } catch (error) {
      alert('Invalid username or password, try again');
    }
  }
  
  return (
    <main>
      <Nav />
      <div className="container" id="main-box">

        <form action="#" id="login" onSubmit={handleSubmit}>
          <h1 id="login-header">Log in to Twitter</h1>
        
          <input type="text" className="login-form" placeholder="Phone, email or username" 
            value={username} onChange={e => setUsername(e.target.value)}/>
          
          <input type="password" className="login-form" placeholder="Password"
            value={password} onChange={e => {setPassword(e.target.value)}}/>

          <button className="login-options" type="submit">Log in</button>
          <input type="checkbox" className="login-options" />
          <p className="login-options">Remember me · <Link to="#">Forgot password?</Link></p>
        </form>

        <section id="signup-links">
          <p>New to Twitter? <Link to="/signup">Sign up now »</Link></p>
          <p>Already using Twitter via text message? <Link to="#">Activate your account »</Link></p>
        </section>

      </div>

    </main>
  );
}

export default withRouter(LoginForm);