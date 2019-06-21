import React from 'react';
import UserNav from './UserNav';
import Timeline from './Timeline';
import WhoToFollow from './WhoToFollow';

const UserHome = () => (
  <div>
    <UserNav />
    <div className="userhome-container">
      <div className="left-side">
        <Timeline />
      </div>
      <div>
        <WhoToFollow />
      </div>
    </div>
  </div>
)

export default UserHome;