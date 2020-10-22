import Axios from 'axios';

const GetVenuesApi = () => {
  const baseUrl = 'https://mighty-headland-70407.herokuapp.com/';
  return Axios.get(`${baseUrl}/weddingvenues`);
};

export default GetVenuesApi;
