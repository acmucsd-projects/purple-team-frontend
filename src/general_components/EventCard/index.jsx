import React from 'react';
import './style.less';
class EventCard extends React.Component {
  render() {
    return(
      <div className="event-card">
        <img className="image" src={props.image} />
        <div className="info">
          <h1 className="title">{props.title}</h1>
          <h2 className="date">{props.date}</h2>
          <h2 className="location">{props.location}</h2>
          <h2 className="time">{props.time}</h2>
        </div>
      </div>
    );
  }
}

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default EventCard
