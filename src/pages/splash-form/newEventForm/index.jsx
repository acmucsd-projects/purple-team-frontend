import React from 'react';
import './style.css';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: 'Event',
      date: '2000-01-01',
      location: 'PC West',
      startTime: '12:00AM',
      endTime: '12:00AM',
      checkCode: 'breadBot',
      bkImage: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    
    {/* Submit function to backend goes there */}
  
  }
  myChangeHandler = (event) => {
    let evtName = event.target.eventName;
    let dt = event.target.date;
    let loc = event.target.loc;
    let stTime = event.target.startTime;
    let edTime = event.target.endTime;
    let chkCode = event.target.ckinCode;
    let bkImg = null;
    if(event.target.file !== undefined){
      bkImg = event.target.file[0];
    }
    
    this.setState({
      eventName: evtName,
      date: dt, 
      location: loc, 
      startTime: stTime,
      endTime: edTime,
      checkCode: chkCode,
      bkImage: bkImg,
    });
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <div className="formBox">
          <h1 className="title">List an Event</h1>
          <br />

          <div className='eventTitle'>
            <p>Event Title</p>
            <input
              className="inputBox"
              type='text'
              name='eventTitle'
              onChange={this.myChangeHandler}
            />
          </div>

          <div className='eventDate'>
            <p>Event Date</p>
            <input
              className="inputBox"
              type='date'
              name='date'
              onChange={this.myChangeHandler}
            />
          </div>
          
          <div className='eventLoc'>
            <p>Event Location</p>
            <input
              className="inputBox"
              type='text'
              name='loc'
              onChange={this.myChangeHandler}
            />
          </div>
          
          <div className='eventStart halfBox'>
            <p>Start Time</p>
            <input
              className="inputBox"
              type='time'
              name='startTime'
              onChange={this.myChangeHandler}
            />
          </div>
          <div className='spacer' />
          <div className='eventEnd halfBox'>
            <p>End Time</p>
            <input
              className="inputBox"
              type='time'
              name='endTime'
              onChange={this.myChangeHandler}
            />
          </div>
          
          <div className='eventChkIn'>
            <p>Check-In Code</p>
            <input
              className="inputBox"
              type='text'
              name='ckinCode'
              onChange={this.myChangeHandler}
            />
          </div>
          {/*<div className='tags'>
            <p>Tags</p>
            <input
              className="inputBox"
              type='text'
              name='ckinCode'
              onChange={this.myChangeHandler}
            />
          </div>*/}

          <div className='bckImg'>
            <p>Background Image</p>
          </div>
          <div className="inputFile">
            <label className="fileButton">
              <input style={{display:'none'}} type="file" ref={this.fileInput} />
              Choose file
            </label>
          </div>
          <p />
          <div className='submitContainer'>
            <input className="submitButton" type='submit' />
          </div>
        </div>
      </form>
    );
  }
  
}

export default CreateForm;