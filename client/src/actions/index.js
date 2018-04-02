import axios from 'axios';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_FAILURE,
  FETCH_CARS_SUCCESS,
  SORT_BY_NAME,
  SORT_BY_MAKE,
  SORT_BY_YEAR,
  SORT_BY_AVAILABILITY,
  SORT_BY,
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

export const sortBy = (sortType) => ({
  sortType,
  type: SORT_BY,
});

