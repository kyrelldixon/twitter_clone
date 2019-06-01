import  React, { useState } from "react";
import Nav from "./Nav";
import './SignupForm.css';
import { Link } from "react-router-dom";

const SignupForm = () =>

{
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Nav />
       <div className="container" id="signup-box">
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

        <Link to="/login"><button>Sign Up</button></Link>
       </div>
    </div>
  );

}

export default SignupForm;