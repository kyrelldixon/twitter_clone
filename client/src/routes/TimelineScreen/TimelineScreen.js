import React from 'react';
import { Switch,Route } from 'react-router-dom'
import UserNav from '../../components/UserNav';
import Timeline from '../../components/Timeline';
import WhoToFollow from '../../components/WhoToFollow';
import UserTimeline from '../../components/UserTimeline';

const TimelineScreen = () => (
  <div>
    <UserNav />
    <div className="home-container">
      <div className="left-side">
        <Switch>
          <Route path="/home" component={Timeline} />
          <Route path="/:username" component={UserTimeline} />
        </Switch>
      </div>
      <div>
        <WhoToFollow />
      </div>
    </div>
  </div>
)

export default TimelineScreen;