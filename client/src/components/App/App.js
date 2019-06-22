import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage';
import SignupPage from '../../routes/SignupPage';
import Footer from '../Footer/Footer';

const App = () => (
  <>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/home" component={HomePage} />
    <Footer />
  </>
);

export default App;
