import React from 'react';
import Navbar from '../../general_components/navBar';
import PropTypes from 'prop-types';

import './style.css';

const splashMain = (props) => {
  const {
    title,
    startTime,
    foodArrival,
    code,
  } = props;
        return(
            <div>
                <Navbar isListPage='false' />
                <div className="image_container" href={props.image}>
                  <img src={props.image} alt="" />
                </div>
                <div className="info_container">
                  <h1 className="title">Welcome to {props.title}!</h1>
                  <h2 className="info">We will start in {props.startTime} minutes</h2>
                  <h2 className="info">Food is arriving in {props.foodArrival} minutes! Remember to check in!</h2>
                  <h2 className="info">Check-In Code: {props.code}</h2>
                </div>
            </div>
        );
}

splashMain.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  foodArrival: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default splashMain;
