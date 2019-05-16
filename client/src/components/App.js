import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Nav from './Nav';
import LoginForm from './LoginForm';
import Timeline from './Timeline';
import SignupForm from './SignupForm';

const App = () => (
  <>
    <Nav />
    <Route exact path="/" component={Timeline} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />

  </>
);

export default App;
