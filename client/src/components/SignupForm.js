import  React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Nav from "./Nav";
import { useForm } from "../hooks/useForm";

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
      const response = await axios.post('http://localhost:4000/v1/users', user);
      console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function signup() {
    const isSuccess = createUser();
    if (isSuccess) history.push('/login');
  }

  return (
    <div>
      <Nav />
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
            <input type="text" name="email" value={values.email || ''} onChange={handleChange} required />
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="password" value={values.password || ''} onChange={handleChange} required />
          </label>
          <button type="submit">Sign Up</button>
        </form>
       </div>
    </div>
  );
}

export default withRouter(SignupForm);