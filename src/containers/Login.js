import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { UserToken, Errors } from '../actions';
import '../assets/styles/auth.css';

const Login = props => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/" />;
  }
  const login = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    Axios.post('https://mighty-headland-70407.herokuapp.com/logs', {
      username: username.value,
      password:password.value
    })
      .then(response => {// eslint-disable-line
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          props.UserToken(response.data.token);
        }
        props.Errors(response.data.error[0]);
      }).catch(err => err);
  };
  return (
    <div className="auth-div">
      <div className="auth-content">
        <h1>Sign in</h1>
        <p>Helle there! Sign in and start exploring your future venues</p>
        <form>
          <input placeholder="username" id="username" type="text" />
          <br />
          <input placeholder="password" id="password" type="password" />
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

const mapStateToProps = state => ({
  token: state.token,
});
const mapDispatchToProps = dispatch => ({
  UserToken: data => {
    dispatch(UserToken(data));
  },
  Errors: error => {
    dispatch(Errors(error));
  },
});

Login.propTypes = {
  Errors: PropTypes.func.isRequired,
  UserToken: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
