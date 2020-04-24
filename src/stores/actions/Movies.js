import { Map } from 'immutable';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import { getNowPlayingMovies, getNowPlayingMovie } from '../../api';
import {
  priceConverter, inputDate
} from '../../helpers/Method';

export const SET_DATA_MOVIES = 'movies/SET_DATA_MOVIES';
export const SET_DATA_MOVIE = 'movies/SET_DATA_MOVIE';
export const TOGGLE_LOADING = 'movies/TOGGLE_LOADING';
export const TOGGLE_LOADING_DETAIL = 'movies/TOGGLE_LOADING_DETAIL';
export const SET_ERROR_MESSAGE = 'movies/SET_ERROR_MESSAGE';
export const CHANGE_PAGE = 'movies/CHANGE_PAGE';
export const CHANGE_MOVIES_PER_PAGE = 'movies/CHANGE_MOVIES_PER_PAGE';
export const UPDATE_INPUT_VALUE = 'movies/UPDATE_INPUT_VALUE';
export const CLEAR_SUGGESTIONS = 'movies/CLEAR_SUGGESTIONS';
export const MAYBE_UPDATE_SUGGESTIONS = 'movies/MAYBE_UPDATE_SUGGESTIONS';
export const LOAD_SUGGESTIONS_BEGIN = 'movies/LOAD_SUGGESTIONS_BEGIN';
export const SET_FILTER_RESULT = 'movies/SET_FILTER_RESULT';

export const fetchNowPlayingMovies = () => async (dispatch, getState) => {
  dispatch({ type: TOGGLE_LOADING, isLoading: true });

  const params = {
    language: 'id-ID',
    page: 1,
    region: 'id'
  };

  await getNowPlayingMovies(params).then(async ({ data }) => {
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
    const moviesPerPage = [...moviesFix].slice(0, 6);

    await dispatch({
      type: SET_DATA_MOVIES, moviesFix, moviesPerPage, data
    });
    await dispatch({ type: TOGGLE_LOADING, isLoading: false });
  }).catch((error) => {
    toast.error(error.response.data.status_message);
    dispatch({ type: TOGGLE_LOADING, isLoading: false });
  });
};

export const fetchDetailMovie = movieId => async (dispatch, getState) => {
  dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: true });

  const params = {
    language: 'id-ID',
    append_to_response: 'credits,similar,recommendations'
  };

  await getNowPlayingMovie(movieId, params).then(async ({ data }) => {
    let movieFix = {};
    const movies = getState().movies.movies;
    movieFix = movies.filter(value => (value.id === data.id))[0];
    if (movies.length > 0) {
      if (movieFix.is_belong_to) {
        movieFix = Map(data).set('is_belong_to', true).toJS();
      } else {
        movieFix = Map(data).set('is_belong_to', false).toJS();
      }
    } else {
      movieFix = Map(data).set('is_belong_to', false).toJS();
    }

    await dispatch({ type: SET_DATA_MOVIE, movieFix });
    await dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: false });
  }).catch((error) => {
    toast.error(error.response.data.status_message);
    dispatch({ type: TOGGLE_LOADING_DETAIL, isLoadingDetail: false });
  });
};

export const handleActionBuy = type => async (dispatch, getState) => {
  const data = getState().movies.movie;

  let movieFix = {};
  const price = priceConverter(data.vote_average);
  const date = inputDate(new Date());

  console.warn('jalan sat');
  if (type === 'buy') {
    movieFix = Map(data).set('is_belong_to', true).toJS();
    toast.success('Please waiting you will be redirecting to PermataNET.com');
    setTimeout(() => {
      window.open(`http://localhost:3000/permatanet-pay?vaNumber=8965050000000045&transactionDate=${date}&amount=${price}&callbackUrl=${window.location.href}&callbackUrl2=ulr2&description=testing`, '_blank');
    },
    3000);
  } else {
    movieFix = Map(data).set('is_belong_to', false).toJS();
    toast.success('cancel purchasing success');
  }

  await dispatch({ type: SET_DATA_MOVIE, movieFix });
};

export const handlePagination = type => async (dispatch, getState) => {
  const page = await getState().movies.currentPage;
  const movies = await getState().movies.movies;
  let currentPage;
  const size = 6;
  let moviesPerPage;

  if (type === 'prev') {
    dispatch({ type: CHANGE_PAGE, currentPage: page - 1 });
    currentPage = page - 1;
    moviesPerPage = [...movies].slice(((currentPage - 1) * size), (size * currentPage));
    dispatch({ type: CHANGE_MOVIES_PER_PAGE, moviesPerPage });
  } else if (type === 'next') {
    dispatch({ type: CHANGE_PAGE, currentPage: page + 1 });
    currentPage = page + 1;
    moviesPerPage = [...movies].slice(((currentPage - 1) * size), (size * currentPage));
    dispatch({ type: CHANGE_MOVIES_PER_PAGE, moviesPerPage });
  } else {
    dispatch({ type: CHANGE_PAGE, currentPage: type });
    currentPage = type;
    moviesPerPage = [...movies].slice(((currentPage - 1) * size), (size * currentPage));
    dispatch({ type: CHANGE_MOVIES_PER_PAGE, moviesPerPage });
  }

  await dispatch(push(`/?page=${currentPage}`));
};

export const handleFilterMovies = e => (dispatch, getState) => {
  const value = e.target.value;
  const movies = getState().movies.movies;
  if (value) {
    const result = [...movies].filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    dispatch({
      type: SET_FILTER_RESULT,
      result
    });
  } else {
    dispatch({
      type: SET_FILTER_RESULT,
      result: [...movies]
    });
  }
};
