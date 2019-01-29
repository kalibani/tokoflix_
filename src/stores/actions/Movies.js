import { Map } from 'immutable';
import { getNowPlayingMovies, getNowPlayingMovie } from '../../api';

export const SET_DATA_MOVIES = 'movies/SET_DATA_MOVIES';
export const SET_DATA_MOVIE = 'movies/SET_DATA_MOVIE';
export const TOGGLE_LOADING = 'movies/TOGGLE_LOADING';
export const TOGGLE_LOADING_DETAIL = 'movies/TOGGLE_LOADING_DETAIL';
export const SET_ERROR_MESSAGE = 'movies/SET_ERROR_MESSAGE';

export const fetchNowPlayingMovies = () => async (dispatch, getState) => {
  dispatch({ type: TOGGLE_LOADING, isLoading: true });

  const queryString = {
    language: 'id-ID',
    page: 1,
    region: 'id'
  };

  await getNowPlayingMovies(queryString).then(async ({ data }) => {
    let moviesFix = [];
    const movie = getState().movies.movie;
    const moviesData = getState().movies.movies;
    if (moviesData.length > 0) {
      moviesFix = moviesData.map((value) => {
        let data = value;
        if (data.id === movie.id) {
          data = movie;
        }
        return data;
      });
    } else {
      const movies = data.results.map(value => ({
        ...value, is_belong_to: false

      }));
      moviesFix = movies.map((value) => {
        let data = value;
        if (data.id === movie.id) {
          data = movie;
        }
        return data;
      });
    }

    await dispatch({ type: SET_DATA_MOVIES, moviesFix, data });
    await dispatch({ type: TOGGLE_LOADING, isLoading: false });
  }).catch(({ error }) => {
    dispatch({ type: SET_ERROR_MESSAGE, message: 'error.status_message' });
    dispatch({ type: TOGGLE_LOADING, isLoading: false });
  });
};

export const fetchDetailMovie = movieId => async (dispatch, getState) => {
  dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: true });

  const queryString = {
    language: 'id-ID',
    append: 'credits,similar,recommendations'
  };

  await getNowPlayingMovie(movieId, queryString).then(async ({ data }) => {
    let movieFix = {};
    const movie = getState().movies.movie;

    if (movie.id === data.id) {
      movieFix = movie;
    } else if (movie.is_belong_to && data.is_belong_to !== undefined) {
      movieFix = Map(data).set('is_belong_to', true).toJS();
    } else {
      movieFix = Map(data).set('is_belong_to', false).toJS();
    }


    await dispatch({ type: SET_DATA_MOVIE, movieFix });
    await dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: false });
  }).catch(({ error }) => {
    dispatch({ type: SET_ERROR_MESSAGE, message: 'error.status_message' });
    dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: false });
  });
};

export const handleActionBuy = (movieId, type) => async (dispatch, getState) => {
  const data = getState().movies.movie;
  let movieFix = {};
  if (type === 'buy') {
    movieFix = Map(data).set('is_belong_to', true).toJS();
  } else {
    movieFix = Map(data).set('is_belong_to', false).toJS();
  }

  await dispatch({ type: SET_DATA_MOVIE, movieFix });
};
