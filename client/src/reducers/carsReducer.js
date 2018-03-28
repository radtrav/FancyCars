import {
  FETCH_CARS_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_AVAILABILITY,
  SORT_BY_YEAR,
  SORT_BY_MAKE,
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};


