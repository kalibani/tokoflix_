import { Map } from 'immutable';
import { getNowPlayingMovies, getNowPlayingMovie } from '../../api';

export const SET_DATA_MOVIES = 'movies/SET_DATA_MOVIES';
export const SET_DATA_MOVIE = 'movies/SET_DATA_MOVIE';
export const TOGGLE_LOADING = 'movies/TOGGLE_LOADING';
export const TOGGLE_LOADING_DETAIL = 'movies/TOGGLE_LOADING_DETAIL';
export const SET_ERROR_MESSAGE = 'movies/SET_ERROR_MESSAGE';

export const fetchNowPlayingMovies = () => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING, isLoading: true });

  const queryString = {
    language: 'id-ID',
    page: 1,
    region: 'id'
  };

  await getNowPlayingMovies(queryString).then(async ({ data }) => {
    const movies = data.results.map(value => ({
      ...value, is_belong_to: false

    }));
    await dispatch({ type: SET_DATA_MOVIES, movies, data });
    await dispatch({ type: TOGGLE_LOADING, isLoading: false });
  }).catch(({ error }) => {
    dispatch({ type: SET_ERROR_MESSAGE, message: 'error.status_message' });
    dispatch({ type: TOGGLE_LOADING, isLoading: false });
  });
};

export const fetchDetailMovie = movieId => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: true });

  const queryString = {
    language: 'id-ID',
    append: 'credits,similar,recommendations'
  };

  await getNowPlayingMovie(movieId, queryString).then(async ({ data }) => {
    const movie = Map(data).set('is_belong_to', false).toJS();
    await dispatch({ type: SET_DATA_MOVIE, movie });
    await dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: false });
  }).catch(({ error }) => {
    dispatch({ type: SET_ERROR_MESSAGE, message: 'error.status_message' });
    dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: false });
  });
};
