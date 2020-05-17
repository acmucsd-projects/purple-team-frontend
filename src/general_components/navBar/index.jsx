import React from 'react';
import './style.less';
import Rainbow from './Rainbow';
import { BrowserRouter as Link } from 'react-router-dom';

class NavBar extends React.Component {
    
    
    render() {
      return (
      
       <div class='navBarBack'>
           <div class='navbar'>
                <ul>
                    <li>
                        <Link to={'/'}> <h1>ACM</h1> </Link>
                    </li>
                    <li>
                        <Link to={'/'}> View Splash Pages </Link>
                    </li>

                </ul>
           </div>
           <Rainbow />

       </div>

      );

    }
  }
export default NavBar
