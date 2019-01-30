import {
  SET_DATA_MOVIES, SET_DATA_MOVIE, TOGGLE_LOADING, TOGGLE_LOADING_DETAIL, SET_ERROR_MESSAGE, CHANGE_PAGE, CHANGE_MOVIES_PER_PAGE
} from '../actions/Movies';


const initialState = {
  movies: [],
  moviesPerPage: [],
  movie: {},
  isLoading: false,
  isLoadingDetail: false,
  currentPage: 1,
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
        moviesPerPage: action.moviesPerPage,
        currentPage: action.data.page,
        totalPage: action.data.total_results ? Math.ceil(action.data.total_results / 6) : action.data.total_pages,
        totalResult: action.data.total_results
      };
    case SET_DATA_MOVIE:
      return {
        ...state,
        movie: action.movieFix
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case CHANGE_MOVIES_PER_PAGE:
      return {
        ...state,
        moviesPerPage: action.moviesPerPage
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
