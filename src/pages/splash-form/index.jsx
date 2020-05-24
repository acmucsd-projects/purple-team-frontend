import React from 'react';
import Navbar from '../../general_components/navBar';
import {ReactComponent as Welcome} from '../../assets/welcome.svg';
import './style.css';


class splashForm extends React.Component {
    render() {
        return(
            <div>
                <Navbar isListPage='false' />
                
                <div id="welcome">
                    <Welcome />
                </div>
            </div>
        );
    }
}

export default splashForm;