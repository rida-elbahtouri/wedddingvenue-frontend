import Axios from 'axios'

const AddTofavourite = (user_id,venue_id)=>{
    Axios.post('https://mighty-headland-70407.herokuapp.com/favourites', {
        user_id: user_id,
        weddingvenue_id: venue_id
      })
      .then(function (response) {
        console.log(response);
      })

}

export default AddTofavourite