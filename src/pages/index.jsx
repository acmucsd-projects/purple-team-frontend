import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Page extends React.Component {
    render() {
      return(
        <Router>

          <Switch>
            <Route exact path='/' component={splash-form} />
            {/*<Route path='/list' component={splash-listing} />
            <Route path='/event' render={(props) => <Dashboard {...props} event={} />} />*/}
          </Switch>
          <div className='diamonds'>
            <img src = '../assets/diamond.svg'/>
          </div>
        </Router>
        


      );
    }

}

export default Page
