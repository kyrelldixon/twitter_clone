import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const LoginForm = () => (
  <main>
    <Nav />
    <div className="container" id="main-box">

      <form action="#">
        <h1>Log in to Twitter</h1>

        <input type="text" placeholder="Phone, email or username" />
        <input type="text" placeholder="Password" />
        <button className="login-options">Log in</button>
        <input type="checkbox" className="login-options" />Remember me · <a href="#4">Forgot password?</a>
      </form>

      <section id="signup-links">
        <p>New to Twitter? <Link to="/signup">Sign up now »</Link></p>
        <p>Already using Twitter via text message? <a href="#6">Activate your account »</a></p>
      </section>

    </div>

  </main>
);

export default LoginForm;