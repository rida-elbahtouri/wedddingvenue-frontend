import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";
import {UserID} from '../actions'
import '../assets/styles/nav.css'
import PropTypes from 'prop-types'
 const Nav=(props)=> {
    if (localStorage.getItem('user_id')){
        props.UserID(parseInt(localStorage.getItem('user_id')))
    }
      if(!props.user_id){
          return <Redirect to='/signup' />
       }
    console.log(props)
     const logout = ()=>{
        localStorage.removeItem('user_id');
        props.UserID("")
     }

     const close = ()=>{
         const nav = document.getElementById("navbar")
         nav.className="navbar"
         nav.classList.add("hide")
     }
     const show =()=>{
        const nav = document.getElementById("navbar")
        nav.className="navbar"
        nav.classList.add("left")
     }
    return (
        <nav>
            <div className="nav">
                <div onClick={show} className="hamburger">
                    <span></span>
                    <span></span>
                    <span className="last-bar"></span>
                </div>
            </div>
        <div id="navbar" className="navbar hide">
            <span onClick={close} className="close">X</span>
            <ul>
                <li>
                <Link onClick={close} to={'/'}>
                    Home
                </Link>  
                
                 </li>
                 <li>
                <Link onClick={close} to={'/favourite'}>
                    Favourite
                </Link>
                 </li>
                <li className="logout" onClick={logout}>Log out</li>
            </ul>
        </div>
        </nav>
    )
}
const mapStateToProps = state => ({
    user_id: state.user_id,
  });

const mapDispatchToProps = dispatch => ({
    UserID: data => {
      dispatch(UserID(data));
    },
  });

  Nav.propTypes = {
    UserID:PropTypes.func.isRequired,
    user_id:PropTypes.number.isRequired
  };
export default connect(mapStateToProps, mapDispatchToProps)(Nav);