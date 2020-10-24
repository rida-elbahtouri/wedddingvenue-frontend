import Axios from 'axios';

const baseUrl = 'https://mighty-headland-70407.herokuapp.com';
export const GetVenuesApi = () => Axios.get(`${baseUrl}/weddingvenues`);

export const AddTofavourite = (token, VenueId) => {
  Axios.post(`${baseUrl}/favourites`, {
    token,
    weddingvenue_id: VenueId,
  });
};

export const GetDetailsApi = id => Axios.get(`${baseUrl}/weddingvenues/${id}`);
export const GetfavouritesApi = token => Axios.get(`${baseUrl}/favourites`, {
  params: { token },
});
