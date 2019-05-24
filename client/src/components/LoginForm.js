import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import './LoginForm.css';

const LoginForm = () => (
  <main>
    <Nav />
    <div className="container" id="main-box">

      <form action="#">
        <h1 id="login-header">Log in to Twitter</h1>

        <input type="text" className="login-form" placeholder="Phone, email or username" />
        <input type="text" className="login-form" placeholder="Password" />
        <Link to="#"><button className="login-options">Log in</button></Link>
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

export default LoginForm;