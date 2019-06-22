import React from 'react';
import { Route } from 'react-router-dom'
import UserNav from '../../components/UserNav/UserNav';
import Timeline from '../../components/Timeline';
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow';

const HomePage = () => (
  <div>
    <UserNav />
    <div className="userhome-container">
      <div className="left-side">
        <Route path="/home" component={Timeline} />
        {/* <Route path="/:username" component={UserTimeline} /> */}
      </div>
      <div>
        <WhoToFollow />
      </div>
    </div>
  </div>
)

export default HomePage;