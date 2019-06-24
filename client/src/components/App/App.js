import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingScreen from '../../routes/LandingScreen';
import TimelineScreen from '../../routes/TimelineScreen';
import LoginScreen from '../../routes/LoginScreen';
import SignupScreen from '../../routes/SignupScreen';
import PrivateRoute from '../PrivateRoute';
import Footer from '../Footer';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/signup" component={SignupScreen} />
    <PrivateRoute path="/home" component={TimelineScreen} />
    <PrivateRoute exact path="/:username" component={TimelineScreen} />
    <Footer />
  </Switch>
);

export default App;
