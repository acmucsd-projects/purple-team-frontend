import React from 'react';
import Rainbow from './Rainbow';
import './style.css';
class NavBar extends React.Component {
  render() {
    return (
      <div class="navBarBack">
        <div class="navbar">
          <ul>
            <li>
              <h1>ACM</h1>
            </li>
            <li>View Splash Pages</li>
          </ul>
        </div>
        <Rainbow />
      </div>
    );
  }
}

export default NavBar;
