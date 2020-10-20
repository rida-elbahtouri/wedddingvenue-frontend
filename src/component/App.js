import React from 'react';


import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import VenueList from '../containers/venueList';
import VenueDetails from '../containers/venueDetails';
import Nav from '../containers/nav'
import Login from '../containers/Login'
import Signup from '../containers/Signup'

import '../assets/styles/base.css'
function App() {
  return (
    <div className="App">
       <Router>
       <Nav />
       <Switch>
          <Route exact path="/" component={VenueList} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/venue/:id/:name" component={VenueDetails} />
        </Switch>
       </Router>
    </div>
  );
}

export default App;
