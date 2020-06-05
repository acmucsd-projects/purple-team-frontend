import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const EventCard = (props) => {
  const {
    image,
    title,
    date,
    location,
    time,
  } = props;

  return (
    <div className="event-card">
      <div className="image_container" href={props.image}>
        <img src={props.image} alt="" />
      </div>
      <h1 className="title">{props.title}</h1>
      <div className="info">
        <h2 className="date">{props.date}</h2>
        <h2 className="location">{props.location}</h2>
        <h2 className="time">{props.time}</h2>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default EventCard
