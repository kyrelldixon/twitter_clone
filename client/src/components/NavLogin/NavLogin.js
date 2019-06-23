import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import authClient from '../../services/authClient';
import { useForm, useAuth } from '../../hooks';

const NavLogin = ({ history }) => {
  const { values, handleChange, handleSubmit } = useForm(login);
  const [state, setState] = useAuth();
  
  async function login() {
    const credentials = {
      email: values.email,
      password: values.password
    };

    try {
      const userId = await authClient.login(credentials)
      const user = await authClient.getCurrentUser();
      setState({
        ...state,
        isAuthenticated: userId === user.id,
        user
      });
      history.push('/home');
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