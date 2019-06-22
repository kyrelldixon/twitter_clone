import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import TimelinePage from '../../routes/TimelinePage/TimelinePage';
import LoginPage from '../../routes/LoginPage';
import SignupPage from '../../routes/SignupPage';
import Footer from '../Footer/Footer';

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/home" component={TimelinePage} />
    <Route path="/:username" component={TimelinePage} />
    <Footer />
  </Switch>
);

export default App;
