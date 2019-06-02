import  React, { useState, useEffect } from "react";
import Nav from "./Nav";
import './SignupForm.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const SignupForm = () =>

{
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const userInfo = {
      user: {
        name: name,
        username: username,
        credential: {
          email: email,
          password: password
        }
      }
    }
    console.log(userInfo);
    getTest();
    e.preventDefault();
  }

  const getTest = async () => {
    try {
      const response = await axios.get('localhost:4000/api/users');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
    // localhost:4000/api/users

  return (
    <div>
      <Nav />
      <div className="container" id="signup-box">
        <form action="#" id="signup" onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          <label>
            <p>Name</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>

          <label>
            <p>Username</p>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>

          <label>
            <p>Email</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label>
            <p>Password</p>
            <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
          </label>

          <button type="submit">Sign Up</button>
        </form>
       </div>
    </div>
  );

}

export default SignupForm;