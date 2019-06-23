import React from 'react';
import { Route } from 'react-router-dom';
import UserNav from './UserNav';
import Timeline from './Timeline';
import WhoToFollow from './WhoToFollow';
import UserAccount from './UserAccount';

const home = () => (
  <div>
    <UserNav />
    <div className="home-container">
      <div className="left-side">
        <Route path="/home" component={Timeline} />
        <Route path="/useraccount" component={UserAccount} />
      </div>
      <div>
        <WhoToFollow />
      </div>
    </div>
  </div>
)

export default home;