import React from 'react';
import { Route } from 'react-router-dom';
import UserNav from './UserNav';
import Timeline from './Timeline';
import WhoToFollow from './WhoToFollow';
import UserAccount from './UserAccount';

const UserHome = () => (
  <div>
    <UserNav />
    <div className="userhome-container">
      <div className="left-side">
        <Route path="/userhome" component={Timeline} />
        <Route path="/useraccount" component={UserAccount} />
      </div>
      <div>
        <WhoToFollow />
      </div>
    </div>
  </div>
)

export default UserHome;