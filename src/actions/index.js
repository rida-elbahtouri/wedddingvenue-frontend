const Getvenues = data => ({
  type: 'GETALLVENUES',
  payload: data,
});

export const UserID = userid => ({
  type: 'GETUSERID',
  payload: userid,
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
