import  React from "react";
import Nav from "./Nav";
import './SignupForm.css';
import { Link } from "react-router-dom";

const SignupForm = () => (
  <div>
    <Nav />
     <div className="container" id="signup-box">
      <h1>Create your account</h1>
      <p>Name</p>
      <input type="text" />
      <p>Username</p>
      <input type="text" />
      <p>Email</p>
      <input type="text" />
      <p>Password</p>
      <input type="text" />
      <Link to="/login"><button>Sign Up</button></Link>
     </div>
  </div>
);

export default SignupForm;