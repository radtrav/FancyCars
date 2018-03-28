import { SORT_BY } from '../actions/types';

export default function(state = 'name', action) {
  switch (action.type) {
    case SORT_BY:
      return action.sortType;
    default:
      return state;
  }
}

export const sortBy = (cars, sortType) => {
  return cars.sort((a, b) => a[sortType] > b[sortType]);
};
