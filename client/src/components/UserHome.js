import React from 'react';
import UserNav from './UserNav';
import Timeline from './Timeline';

const UserHome = () => (
  <div>
    <UserNav />
    <div className="userhome-container">
      <div className="left-side">
        <Timeline />
      </div>
    </div>
  </div>
)

export default UserHome;