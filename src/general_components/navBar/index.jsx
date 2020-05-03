import React from 'react';
import './style.less';
import Rainbow from './Rainbow';
class NavBar extends React.Component {
    render() {
      return (

       <div className='navBarBack'>
           <div className='navbar'>
                <ul>
                    <li>
                        <h1>ACM</h1>
                    </li>
                    <li>
                        View Splash Pages
                    </li>

                </ul>
           </div>
           <Rainbow />

       </div>

      );

    }
  }
export default NavBar
