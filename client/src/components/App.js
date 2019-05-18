import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import Timeline from './Timeline';
import SignupForm from './SignupForm';

const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/timeline" component={Timeline} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />

  </>
);

export default App;
