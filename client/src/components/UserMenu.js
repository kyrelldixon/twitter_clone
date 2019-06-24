import React from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

const UserMenu = (props) => {

  return (
    <div id="modal-bg" className={props.display ? 'show-menu' : 'hide-menu'} onClick={(event) => {
      if (event.target.id === 'modal-bg') {
        props.handleDisplay(false);
      }
    }}>
      <div className="user-menu">
        <h2 className="title-user-menu">Account Info</h2><button className="menu-close-btn"
          onClick={() => props.handleDisplay(false)}>X</button>
        <img className="img-user-menu" alt="user" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        <div className="menu-name">{props.name || "no name found"}</div>
        <div className="menu-username">@{props.username || "no username found"}</div>
        <div className="menu-follow-count">{props.following || "0"} Following </div>
        <div className="menu-follow-count">{props.follower || "0"} Followers</div>
        <div><Link>Profile</Link></div>
        <div><Link>Logout</Link></div>
      </div>
    </div>
  );
}

export default UserMenu;