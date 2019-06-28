import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingScreen from '../../routes/LandingScreen';
import TimelineScreen from '../../routes/TimelineScreen';
import LoginScreen from '../../routes/LoginScreen';
import SignupScreen from '../../routes/SignupScreen';
import NotFoundScreen from '../../routes/NotFoundScreen';
import PrivateRoute from '../PrivateRoute';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingScreen} />
    <Route path="/login" component={LoginScreen} />
    <Route path="/signup" component={SignupScreen} />
    <PrivateRoute path="/home" component={TimelineScreen} />
    <PrivateRoute exact path="/:username" component={TimelineScreen} />
    <Route component={NotFoundScreen} />
  </Switch>
);

export default App;
