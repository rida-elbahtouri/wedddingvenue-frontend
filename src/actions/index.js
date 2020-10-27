const Getvenues = data => ({
  type: 'GETALLVENUES',
  payload: data,
});

export const UserToken = token => ({
  type: 'GETUSERTOKEN',
  payload: token,
});

export const GetDetails = det => ({
  type: 'GETDETAILS',
  payload: det,
});

export const Errors = error => ({
  type: 'ERROR',
  payload: error,
});

export default Getvenues;
