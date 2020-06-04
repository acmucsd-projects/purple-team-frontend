import React from 'react';
import Navbar from '../../general_components/navBar';
import PropTypes from 'prop-types';

import './style.css';

class splashMain extends React.Component {
    render() {
        return(
            <div>
                <Navbar isListPage='false' />
                <div className="image_container" href={this.props.image}>
                  <img src={this.props.image} alt="" />
                </div>
                <div className="info_container">
                  <h1 className="title">Welcome to {this.props.title}!</h1>
                  <h2 className="info">We will start in {this.props.startTime} minutes</h2>
                  <h2 className="info">Food is arriving at {this.props.foodArrival} minutes! Remember to check in!</h2>
                  <h2 className="info">Check-In Code: {this.props.code}</h2>
                </div>
            </div>
        );
    }
}

splashMain.propTypes = {
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  foodArrival: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default splashMain;
