import Axios from 'axios';

const AddTofavourite = (UserID, VenueId) => {
  Axios.post('https://mighty-headland-70407.herokuapp.com/favourites', {
    user_id: UserID,
    weddingvenue_id: VenueId,
  });
};

export default AddTofavourite;
