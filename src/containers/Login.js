import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { UserID, Errors } from '../actions';
import '../assets/styles/auth.css';

const Login = props => {
  if (localStorage.getItem('user_id')) {
    return <Redirect to="/" />;
  }
  const login = () => {
    const username = document.getElementById('username');
    Axios.post('https://mighty-headland-70407.herokuapp.com/logs', {
      username: username.value,
    })
      .then(response => {// eslint-disable-line
        if (response.data.id) {
          localStorage.setItem('user_id', response.data.id);
          props.UserID(parseInt(response.data.id, 10));
          return <Redirect to="/" />;
        }
        props.Errors(response.data);
      }).catch(err => err);
  };
  return (
    <div className="auth-div">
      <div className="auth-content">
        <h1>Sign in</h1>
        <p>Helle there! Sign in and start exploring your future venues</p>
        <form>
          <input placeholder="username" id="username" type="text" />
          <button className="button" onClick={login} type="button">Login</button>
        </form>
        <span className="switch">
          you don&apost have an acount
          <Link to="/signup"> Sign up</Link>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  UserID: data => {
    dispatch(UserID(data));
  },
  Errors: error => {
    dispatch(Errors(error));
  },
});

Login.propTypes = {
  Errors: PropTypes.func.isRequired,
  UserID: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
