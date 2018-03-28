import {
  FETCH_CARS_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_AVAILABILITY,
  SORT_BY_YEAR,
  SORT_BY_MAKE,
} from '../actions/types';

const sortBy = (cars, sortType) => {
  return cars.sort((a, b) => a[sortType] < b[sortType]);
};


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return action.payload;
    case SORT_BY_NAME:
      return sortBy(state, 'name');
    case SORT_BY_MAKE:
      return sortBy(state, 'make');
    case SORT_BY_YEAR:
      return sortBy(state, 'year');
    case SORT_BY_AVAILABILITY:
      return sortBy(state, 'availability');
    default:
      return state;
  }
}
