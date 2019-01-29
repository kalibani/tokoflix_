import {
  SET_DATA_MOVIES, SET_DATA_MOVIE, TOGGLE_LOADING, TOGGLE_LOADING_DETAIL, SET_ERROR_MESSAGE
} from '../actions/Movies';


const initialState = {
  movies: [],
  movie: {},
  isLoading: false,
  isLoadingDetail: false,
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
        movies: action.moviesFix,
        currenPage: action.data.page,
        totalPage: action.data.total_pages,
        totalResult: action.data.total_results
      };
    case SET_DATA_MOVIE:
      return {
        ...state,
        movie: action.movieFix
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case TOGGLE_LOADING_DETAIL:
      return {
        ...state,
        isLoadingDetail: action.isLoadingDetail
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
