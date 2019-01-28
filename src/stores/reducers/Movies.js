import { SET_DATA_MOVIES, TOGGLE_LOADING, SET_ERROR_MESSAGE } from '../actions/Movies';


const initialState = {
  movies: [],
  isLoading: false,
  currenPage: 1,
  totalPage: 0,
  totalResult: 0,
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MOVIES:
      return {
        ...state,
        movies: action.movies,
        currenPage: action.data.page,
        totalPage: action.data.total_pages,
        totalResult: action.data.total_results
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      };

    default:
      return state;
  }
};
