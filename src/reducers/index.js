import { combineReducers } from 'redux';

const VenuesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GETALLVENUES':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    venues: VenuesReducer,
})


export default rootReducer