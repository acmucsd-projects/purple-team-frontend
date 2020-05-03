import React from 'react';
import './style.less';
class Rainbow extends React.Component {
    render() {

      return(
        <div class='Rainbow'>
          <span class="pinkFill"></span>
          <span class="greenFill"></span>
          <span class="cyanFill"></span>
          <span class="purpleFill"></span>
          <span class="orangeFill"></span>
        </div>
        );

    }
}

export default Rainbow
