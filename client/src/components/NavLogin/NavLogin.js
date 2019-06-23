import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import authClient from '../../services/authClient';
import { useForm } from '../../hooks/useForm';

const NavLogin = ({ history }) => {
  const { values, handleChange, handleSubmit } = useForm(login);

  async function login() {
    const credentials = {
      email: values.email,
      password: values.password
    };

    try {
      const userId = await authClient.login(credentials)
      const user = await authClient.getCurrentUser();
      if (userId === user.id) console.log('user is', user);
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <>
      <div id="top-login">
        <input type="email" placeholder="Phone, email or username"
          name="email" value={values.email || ''} onChange={handleChange}/>
        <input type="password" placeholder="Password"
          name="password" value={values.password || ''} onChange={handleChange}/>
        <button className="login-btn" id="small-btn-upper" onClick={handleSubmit}>Log in</button>
      </div>
      <Link to="/" id="forgot-pass">Forgot password?</Link>
  </>
  )
}

export default withRouter(NavLogin);