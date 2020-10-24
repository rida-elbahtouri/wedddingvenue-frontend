import { combineReducers } from 'redux';

const VenuesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETALLVENUES':
      return action.payload;
    default:
      return state;
  }
};

const UserReducer = (state ='', action) => {
  switch (action.type) {
    case 'GETUSERTOKEN':
      return action.payload;
    default:
      return state;
  }
};
const DetReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETDETAILS':
      return action.payload;
    default:
      return state;
  }
};
const ErrorsReducer = (state = '', action) => {
  switch (action.type) {
    case 'ERROR':
      return action.payload;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  venues: VenuesReducer,
  token: UserReducer,
  venue_details: DetReducer,
  errors: ErrorsReducer,
});

export default rootReducer;
