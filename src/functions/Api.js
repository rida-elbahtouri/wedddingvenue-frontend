import Axios from 'axios';


const baseUrl = 'https://mighty-headland-70407.herokuapp.com/';
export const GetVenuesApi = () => {
  return Axios.get(`${baseUrl}/weddingvenues`);
};

export const AddTofavourite = (token, VenueId) => {
    Axios.post(`${baseUrl}/favourites`, {
      token: token,
      weddingvenue_id: VenueId,
    });
  };

  export const GetDetailsApi = (id) => {
    return Axios.get(`${baseUrl}/weddingvenues/${id}`)

};
export const GetfavouritesApi = (userid)=>{
  return Axios.get(`${baseUrl}/favourites`, {
    params: { id: parseInt(userid, 10) },
  })
}