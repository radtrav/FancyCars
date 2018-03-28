import axios from 'axios';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_FAILURE,
  FETCH_CARS_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_MAKE,
  SORT_BY_YEAR,
  SORT_BY_AVAILABILITY,
} from './types';


export const fetchCars = () => async dispatch => {
  try {
    dispatch({ type: FETCH_CARS_REQUEST });
    const res = await axios.get('/api/cars');
    dispatch({ type: FETCH_CARS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_CARS_FAILURE, payload: err });
  }
};

export const sortByName = () => ({
  type: SORT_BY_NAME,
});

export const sortByMake = () => ({
  type: SORT_BY_MAKE,
});
export const sortByAvailability = () => ({
  type: SORT_BY_AVAILABILITY,
});
export const sortByYear = () => ({
  type: SORT_BY_YEAR,
});
