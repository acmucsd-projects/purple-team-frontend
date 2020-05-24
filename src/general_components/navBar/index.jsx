import React from 'react';
import Rainbow from './Rainbow';
import { Link } from 'react-router-dom';
import './style.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
            acm
        </div>

        <div className="view">
          {this.props.isListPage === 'true' ? <Link>Create a Splash Page </Link> : <Link>View Splash Pages </Link>}

        </div>
        <Rainbow />
      </div>
    );
  }
}

export default NavBar;
