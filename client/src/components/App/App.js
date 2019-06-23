import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from '../../routes/LandingPage';
import TimelinePage from '../../routes/TimelinePage';
import LoginPage from '../../routes/LoginPage';
import SignupPage from '../../routes/SignupPage';
import PrivateRoute from '../PrivateRoute';
import Footer from '../Footer';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
    <PrivateRoute path="/home" component={TimelinePage} />
    <Route exact path="/:username" component={TimelinePage} />
    <Footer />
  </Switch>
);

export default App;
