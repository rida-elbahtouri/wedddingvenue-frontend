import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";
import {UserID} from '../actions'
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
    return (
        <div>
            <ul>
                <li>
                <Link to={'/'}>
                    Home
                    </Link>
                    </li>
                <li onClick={logout}>Log out</li>
            </ul>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav);