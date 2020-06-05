import React from 'react';
import './style.css';
import {ReactComponent as Diamond} from '../assets/diamonds.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import splashForm from './splash-form';
import splashMain from './splash-main';

class Page extends React.Component {
  render() {
    return (
        <Router>
          <Switch>

            <Route exact path='/' component={splashForm} />
            {/*<Route path='/list' component={splash-listing} />*/}
            <Route path='/event' component={splashMain}
                    render={(routeProps) => <splashMain {...routeProps}
                      image="https://static-template.acmucsd.com/static/media/logo.34f30e9c.png"
                      title="skribl memes"
                      startTime="4:20"
                      foodArrival="4:20"
                      code="m3m3s"/>}
            /> {/* this is the page, yo can pass in props here*/}
          </Switch>
          <div className="diamonds">
            <Diamond />
          </div>
        </Router>
    );
  }
}

export default Page;
