import React from 'react';
import { Switch,Route } from 'react-router-dom'
import UserNav from '../../components/UserNav';
import Timeline from '../../components/Timeline';
import WhoToFollow from '../../components/WhoToFollow';
import UserTimeline from '../../components/UserTimeline';
import { useAuth } from '../../hooks';
import { generateRandomIconUrl } from '../../services/randomImageClient';

const TimelineScreen = () => {

  const [{ isAuthenticated }, ] = useAuth();

  return (
    <div>
      <div id="home-bar-nav" className="home-bar">
        {isAuthenticated && <img className="user-profile-img" alt="user" src={generateRandomIconUrl()} />}Home
        <i className="far fa-star"></i>
      </div>
      <UserNav />
      <div className="home-container">
        <div className="left-side">
          <Switch>
            <Route path="/home" component={Timeline} />
            <Route path="/:username" component={UserTimeline} />
          </Switch>
        </div>
        <div className="tl-right-side">
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
}

export default TimelineScreen;