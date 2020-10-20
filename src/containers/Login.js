import React from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {UserID} from '../actions'
import { Redirect, Link } from "react-router-dom";
import '../assets/styles/auth.css'
const Login=(props)=> {
     if (localStorage.getItem('user_id')){
       return <Redirect to='/' />
     }
    const login = () =>{
        const username = document.getElementById("username")
         Axios.post('https://mighty-headland-70407.herokuapp.com/logs', {
             username:username.value
           })
           .then(function (response) {
                if(response.data.id){
                     localStorage.setItem('user_id',response.data.id );
                     console.log(response)
                     props.UserID(response.data.id)
                     return <Redirect to='/' />
                }else {
                 props.UserID(response.data[0])
                }
           }).catch(err => err);
    }
    return (
        <div className="auth-div">
           <div className="auth-content">
           <h1>Sign in</h1>
           <p>Helle there! Sign in and start exploring your future venues</p>
            <form>
                <input placeholder="username" id="username" type="text" />
                <button className="button" onClick={login} type="button">Login</button>
            </form>
            <span className="switch">you don't have an acount<Link to={'/signup'}> Sign up</Link></span>
        </div></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);