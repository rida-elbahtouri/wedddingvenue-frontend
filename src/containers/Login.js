import React from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {UserID} from '../actions'
import { Redirect } from "react-router-dom";

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
                     props.UserID(response.data.id)
                }else {
                 props.UserID(response.data[0])
                }
           }).catch(err => err);
    }
    return (
        <div>
            <form>
                <label>Username :</label>
                <input id="username" type="text" />
                <button onClick={login} type="button">Login</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    UserID: data => {
      dispatch(UserID(data));
    },
  });
export default connect(null, mapDispatchToProps)(Login);