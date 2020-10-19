import React from 'react'
import Axios from 'axios'
const Signup=()=> {
    const signup = () =>{
        const username = document.getElementById("username")
         Axios.post('https://mighty-headland-70407.herokuapp.com/users', {
             username:username.value
           })
           .then(function (response) {
             console.log(response);
           })

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
export default Signup