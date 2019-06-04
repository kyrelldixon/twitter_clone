import  React, { useState } from "react";
import Nav from "./Nav";
import './SignupForm.css';
import { withRouter } from "react-router-dom";
import axios from 'axios';

const SignupForm = ({ history }) =>

{
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const user = {
      user: {
        name: name,
        username: username,
        credential: {
          email: email,
          password: password
        }
      }
    }
    createUser(user);
    history.push('/login');
    e.preventDefault();
  }

  const createUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:4000/api/users', user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>

          <button type="submit">Sign Up</button>
        </form>
       </div>
    </div>
  );

}

export default withRouter(SignupForm);