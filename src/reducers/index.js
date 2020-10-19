import { combineReducers } from 'redux';

const VenuesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETALLVENUES':
      return action.payload;
    default:
      return state;
  }
};

const UserReducer = (state = '', action) => {
  switch (action.type) {
    case 'GETUSERID':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    venues: VenuesReducer,
    user_id:UserReducer,
})


export default rootReducer