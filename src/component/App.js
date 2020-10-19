import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import VenueList from '../containers/venueList';
import VenueDetails from '../containers/venueDetails';
import Nav from './nav'

import Signup from '../containers/Signup'
function App() {
  return (
    <div className="App">
       <Router>
       <Nav />
       <Switch>
          <Route exact path="/" component={VenueList} />
          <Route path="/signup" component={Signup} />
          <Route path="/venue/:id/:name" component={VenueDetails} />
        </Switch>
       </Router>
    </div>
  );
}

export default App;
