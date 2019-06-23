import  React from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import authClient from '../../services/authClient';

import './SignupForm.css';

const SignupForm = ({ history }) =>
{
  const { values, handleChange, handleSubmit } = useForm(signup);
  
  async function createUser() {
    const user = {
      user: {
        name: values.name,
        username: values.username,
        credential: {
          email: values.email,
          password: values.password
        }
      }
    }
    try {
      await authClient.signup(user);
    } catch (error) {
      alert(error);
    }
  }

  function signup() {
    createUser();
    history.push('/login');
  }

  return (
    <div className="container" id="signup-box">
      <form id="signup" onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <label>
          <p>Name</p>
          <input type="text" name="name" value={values.name || ''} onChange={handleChange} required />
        </label>
        <label>
          <p>Username</p>
          <input type="text" name="username" value={values.username || ''} onChange={handleChange} required />
        </label>
        <label>
          <p>Email</p>
          <input type="email" name="email" value={values.email || ''} onChange={handleChange} required />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" value={values.password || ''} onChange={handleChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      </div>
  );
}

export default withRouter(SignupForm);