import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import sortReducer from './sortReducer';

export default combineReducers({
  sort: sortReducer,
  cars: carsReducer,
});