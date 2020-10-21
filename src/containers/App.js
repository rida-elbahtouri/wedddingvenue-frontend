import React from 'react';
import {connect} from 'react-redux'

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import VenueList from './venueList';
import VenueDetails from './venueDetails';
import Nav from './nav'
import Login from './Login'
import Signup from './Signup'
import Favourite from './Favourite'
import Errors from '../component/errors'
import '../assets/styles/base.css'
function App({errors}) {
  const renderErrors = ()=>{
    
    if(errors){
        let errr= errors.map(err=>{
      
        return <Errors msg={err} />
       
       })
       return errr
    }
  
    
  }
  return (
    <div className="App">
       <Router>
       <Nav />
       <div className="errors-container">
    {renderErrors()}
       </div>
       <Switch>
          <Route exact path="/" component={VenueList} />
          <Route path="/signup" component={Signup} />
          <Route path='/favourite' component={Favourite} />
          <Route path="/login" component={Login} />
          <Route path="/venue/:id/:name" component={VenueDetails} />
        </Switch>
       </Router>
    </div>
  );
}
const mapStateToProps = state => ({
  errors:state.errors
});
export default connect(mapStateToProps)(App);
