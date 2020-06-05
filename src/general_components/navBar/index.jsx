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
<<<<<<< HEAD
          {this.props.isListPage === 'true' ? <Link to="/">Create a Splash Page </Link> : <Link to="/view">View Splash Pages </Link>}


=======
          {this.props.isListPage === 'true' ? <Link to="/">Create a Splash Page </Link> : <Link to="/view">View Splash Pages </Link>}   
>>>>>>> e51da04a732442f2b848fd8cb247165d3f9eb4f9
        </div>
        <Rainbow />
      </div>
    );
  }
}

export default NavBar;
