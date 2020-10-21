import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UserID } from '../actions';
import '../assets/styles/nav.css';

const Nav = props => {
  if (localStorage.getItem('user_id')) {
    const { UserID } = props;
    UserID(parseInt(localStorage.getItem('user_id'), 10));
  }
  if (!props.user_id) { // eslint-disable-line
    return <Redirect to="/signup" />;
  }
  const logout = () => {
    localStorage.removeItem('user_id');
    const { UserID } = props;
    UserID('');
  };

  const close = () => {
    const nav = document.getElementById('navbar');
    nav.className = 'navbar';
    nav.classList.add('hide');
  };
  const show = () => {
    const nav = document.getElementById('navbar');
    nav.className = 'navbar';
    nav.classList.add('left');
  };
  return (
    <nav>
      <div className="nav">
        <div onClick={show} className="hamburger">{ // eslint-disable-line
          }
          <span />
          <span />
          <span className="last-bar" />
        </div>
      </div>
      <div id="navbar" className="navbar hide">
        <span onClick={close} className="close">X</span>{ // eslint-disable-line
          }
        <ul>
          <li>
            <Link onClick={close} to="/">
              Home
            </Link>

          </li>
          <li>
            <Link onClick={close} to="/favourite">
              Favourite
            </Link>
          </li>
          <li className="logout" onClick={logout}>Log out</li> { // eslint-disable-line
          }
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => ({
  user_id: state.user_id,
});

const mapDispatchToProps = dispatch => ({
  UserID: data => {
    dispatch(UserID(data));
  },
});

Nav.propTypes = {
  UserID: PropTypes.func.isRequired,
  user_id: PropTypes.number.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
