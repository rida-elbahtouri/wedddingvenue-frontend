import Getvenues, { UserID, GetDetails, Errors } from '../actions';

describe('actions', () => {
  it('should get venues data', () => {
    const data = [{ name: 'venues' }];
    const expectedAction = {
      type: 'GETALLVENUES',
      payload: data,
    };
    expect(Getvenues(data)).toEqual(expectedAction);
  });
});

it('should get venue details', () => {
  const data = [{ name: 'venue1' }];
  const expectedAction = {
    type: 'GETDETAILS',
    payload: data,
  };
  expect(GetDetails(data)).toEqual(expectedAction);
});

it('should get userID', () => {
  const data = { user_id: 2 };
  const expectedAction = {
    type: 'GETUSERID',
    payload: data,
  };
  expect(UserID(data)).toEqual(expectedAction);
});

it('should get Errors', () => {
  const data = { error: 'username not found' };
  const expectedAction = {
    type: 'ERROR',
    payload: data,
  };
  expect(Errors(data)).toEqual(expectedAction);
});
