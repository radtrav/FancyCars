import {
  SORT_BY_NAME,
  SORT_BY_AVAILABILITY,
  SORT_BY_YEAR,
  SORT_BY_MAKE,
} from '../actions/types';

export default function(state = 'name', action) {
  switch (action.type) {
    case SORT_BY_NAME:
      return 'name';
    case SORT_BY_MAKE:
      return 'make';
    case SORT_BY_YEAR:
      return 'year';
    case SORT_BY_AVAILABILITY:
      return 'available';
    default:
      return state;
  }
}