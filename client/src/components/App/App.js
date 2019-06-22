import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from '../../routes/LandingPage';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import HomePage from '../../routes/HomePage';
import Footer from '../Footer/Footer';

const App = () => (
  <>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/home" component={HomePage} />
    <Footer />
  </>
);

export default App;
