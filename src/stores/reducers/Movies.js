import { SET_DATA_MOVIES, TOGGLE_LOADING } from '../actions/Movies';


const initialState = {
  movies: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
