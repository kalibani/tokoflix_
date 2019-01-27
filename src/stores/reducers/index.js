import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './Movies';

export default combineReducers({
  routing: routerReducer,
  movies
});
