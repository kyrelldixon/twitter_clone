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
      const user = await authClient.login(credentials)
      setState({
        ...state,
        isAuthenticated: user != null,
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
        <div>
          <input type="email" placeholder="Phone, email or username"
            name="email" value={values.email || ''} onChange={handleChange}/>
        </div>
        <div>
          <input type="password" placeholder="Password"
            name="password" value={values.password || ''} onChange={handleChange}/>
          <Link to="/" id="forgot-pass">Forgot password?</Link>
        </div>
        <button className="login-btn" id="small-btn-upper" onClick={handleSubmit}>Log in</button>
      </div>
  </>
  )
}

export default withRouter(NavLogin);