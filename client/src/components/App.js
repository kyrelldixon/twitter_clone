import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Landing from './Landing';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Home from './Home';

const App = () => (
  <>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/home" component={Home} />
    <Route path="/useraccount" component={Home} />

  </>
);

export default App;
