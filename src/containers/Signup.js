import React from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import {UserID} from '../actions'
import { Redirect } from "react-router-dom";
const Signup=(props)=> {
    if (localStorage.getItem('user_id')){
       return <Redirect to='/' />
    }
    const signup = () =>{
        const username = document.getElementById("username")
         Axios.post('https://mighty-headland-70407.herokuapp.com/users', {
             username:username.value
           })
           .then(function (response) {
               if(response.data.id){
                    localStorage.setItem('user_id',response.data.id );
                    console.log(response.data.id)
                    props.UserID(response.data.id)
               }else {
                console.log(response.data[0])
                props.UserID(response.data[0])
               }
           }).catch(err => err);
    }
    return (
        <div>
            <form>
                <label>Username :</label>
                <input id="username" type="text" />
                <button onClick={signup} type="button">Sign up</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    UserID: data => {
      dispatch(UserID(data));
    },
  });
export default connect(null, mapDispatchToProps)(Signup);