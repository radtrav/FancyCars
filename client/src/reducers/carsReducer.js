import { FETCH_CARS_SUCCESS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
