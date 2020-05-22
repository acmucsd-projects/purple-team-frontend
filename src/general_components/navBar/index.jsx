import React from 'react';
import Rainbow from './Rainbow';

import './style.css';


class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
            acm
        </div>

        <div className="view">
           View Splash Pages
        </div>
        <Rainbow />
      </div>
    );
  }
}

export default NavBar;
