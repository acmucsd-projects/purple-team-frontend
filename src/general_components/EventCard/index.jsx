import React from 'react';
import './style.less';
class EventCard extends React.Component {
  render() {
    return(
      <div className="event-card">
        <img className="image" src={this.props.image} />
        <h1 className="title">{this.props.title}</h1>
        <div className="info">
          <h2 className="date">{this.props.date}</h2>
          <h2 className="location">{this.props.location}</h2>
          <h2 className="time">{this.props.time}</h2>
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
