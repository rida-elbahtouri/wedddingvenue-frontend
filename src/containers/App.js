import React from 'react';
import {connect} from 'react-redux'

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types'
import VenueList from './venueList';
import VenueDetails from './venueDetails';
import {Errors} from '../actions'
import Nav from './nav'
import Login from './Login'
import Signup from './Signup'
import Favourite from './Favourite'
import ErrorsComp from '../component/errors'
import '../assets/styles/base.css'
function App({errors,Errors}) {
  const renderErrors = ()=>{
    
    if(errors && errors[0] !==null){
        let errr= errors.map(err=>{
         setTimeout(()=>{Errors(null) ; }, 2000);
        return <ErrorsComp msg={err} />
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

 const mapDispatchToProps = dispatch => ({
   Errors:error=>{
     dispatch(Errors(error))
   },
 });

App.propTypes = {
  errors: PropTypes.array.isRequired,
  Errors : PropTypes.func.isRequired
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
