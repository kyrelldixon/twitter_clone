import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserHome from './UserHome';
import Footer from './Footer';

const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/home" component={UserHome} />
    <Footer />
  </>
);

export default App;
