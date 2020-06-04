import React from 'react';
import './style.css';
import {ReactComponent as Diamond} from '../assets/diamonds.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import splashForm from './splash-form';

class Page extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={splashForm} />
            {/*<Route path='/list' component={splash-listing} />*/}
            {/*<Route path='/event' render={(props) => <Dashboard {...props} event={} />} /> {/* this is the page, yo can pass in props here*/}
          </Switch>
          <div className="diamonds">
            <Diamond />
          </div>
        </Router>
    );
  }
}

export default Page;
