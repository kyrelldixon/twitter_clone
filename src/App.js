import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <ul>
            <li> <a href="#1" className="nav-link"><i className="fab fa-twitter"></i> Home</a> </li>
            <li> <a href="#2" className="nav-link">About</a> </li>
            <li id="nav-right"> <a href="#3">Language: English</a> </li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="container" id="main-box">

          <form action="#">
            <h1>Log in to Twitter</h1>

            <input type="text" placeholder="Phone, email or username" />
            <input type="text" placeholder="Password" />
            <button className="login-options">Log in</button>
            <input type="checkbox" className="login-options" />Remember me · <a href="#4">Forgot password?</a>
          </form>

          <section>
            <p>New to Twitter? <a href="#5">Sign up now »</a></p>
            <p>Already using Twitter via text message? <a href="#6">Activate your account »</a></p>
          </section>

        </div>

      </main>
    </>
  );
}

export default App;
