import React from 'react';
import './style.css';
class Rainbow extends React.Component {
    render() {
      return(
        <div className='Rainbow'>
          <span className="pinkFill"></span>
          <span className="greenFill"></span>
          <span className="cyanFill"></span>
          <span className="purpleFill"></span>
          <span className="orangeFill"></span>
        </div>
        );

    }
}

export default Rainbow
