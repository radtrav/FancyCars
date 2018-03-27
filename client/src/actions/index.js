import axios from 'axios';
import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_FAILURE,
  FETCH_CARS_SUCCESS,
} from './types';


export const fetchCars = () => async dispatch => {
  try {
    dispatch({ type: FETCH_CARS_REQUEST });
    const res = await axios.get('/api/cars');

    res.data.forEach((car) => {
      console.log('car id', car.id)
    });

    dispatch({ type: FETCH_CARS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_CARS_FAILURE, payload: err });
  }
};
