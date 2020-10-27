import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import VenueList from './venueList';
import VenueDetails from './venueDetails';
import { Errors } from '../actions';
import Nav from './nav';
import Login from './Login';
import Signup from './Signup';
import Favourite from './Favourite';
import ErrorsComp from '../component/errors';
import '../assets/styles/base.css';

function App({ errors, Errors }) {
  const renderErrors = () => {// eslint-disable-line
    if (errors && errors !== null) {
      setTimeout(() => { Errors(null); }, 2000);
      return <ErrorsComp key={1} msg={errors} />;
    }
  };
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="errors-container">
          {renderErrors()}
        </div>
        <div className="cont">
          <Switch>
            <Route exact path="/" component={VenueList} />
            <Route path="/signup" component={Signup} />
            <Route path="/favourite" component={Favourite} />
            <Route path="/login" component={Login} />
            <Route path="/venue/:id/:name" component={VenueDetails} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  Errors: error => {
    dispatch(Errors(error));
  },
});

App.propTypes = {
  errors: PropTypes.string.isRequired,
  Errors: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
