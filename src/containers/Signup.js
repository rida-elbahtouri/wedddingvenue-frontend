import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserToken, Errors } from '../actions';
import '../assets/styles/auth.css';

const Signup = props => {
  if (localStorage.getItem('token')) {
    return <Redirect to="/" />;
  }
  const signup = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const password_con = document.getElementById('password2');
    const passwordmatch = document.getElementById('passwordmatch')
    passwordmatch.innerHTML=""
    if (password.value !== password_con.value){
      passwordmatch.innerHTML="passwords don't match"
    }else{
          Axios.post('https://mighty-headland-70407.herokuapp.com/users', {
      username: username.value,
      password:password.value,
      password_confirmation:password_con.value
    })
      .then(response => { // eslint-disable-line
         if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          props.UserToken( response.data.token);
          
         }else{
          props.Errors(response.data.error[0]);
         }
         
      }).catch(err => err);
    }

  };
  return (
    <div className="auth-div">
      <div className="auth-content">
        <h1>Sign up</h1>
        <p>Helle there! Sign up and start exploring your future venues</p>
        <form>
          <input placeholder="username" id="username" type="text" />
          <br />
          <input placeholder="password" id="password" type="password" />
          <p className="passwordMatchs" id="passwordmatch"></p>
          <br />
          <input placeholder="password confirmation" id="password2" type="password" />
          <button onClick={signup} className="button" type="button">Sign up</button>
        </form>

        <span className="switch">
          you already have an acount
          <Link to="/login"> Sign in</Link>
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

Signup.propTypes = {
  Errors: PropTypes.func.isRequired,
  UserToken: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
