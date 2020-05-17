import React from 'react';
import Navbar from '../../general_components/navBar';

class splashForm extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div id = 'Welcome'>
                    <img src='../../assets.welcome.svg'></img>
                </div>
            </div>
        );
    }
}