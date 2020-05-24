import React from 'react';
import Navbar from '../general_components/navBar';
import EventCard from '../general_components/EventCard';

class Page extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <p>Hello World</p>
        <EventCard
          image='https://imgur.com/bUniKin.png'
          title='ACM memes around on skribble'
          date='February 30, 2020'
          location='ur mum'
          time='4:20 pm'
        />
      </>
    );
  }
}

export default Page;
