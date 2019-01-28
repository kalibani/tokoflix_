import { getNowPlayingMovies } from '../../api';


export const SET_DATA_MOVIES = 'movies/SET_DATA_MOVIES';
export const TOGGLE_LOADING = 'movies/TOGGLE_LOADING';
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
      ...value, isBelong: false

    }));
    await dispatch({ type: SET_DATA_MOVIES, movies, data });
    await dispatch({ type: TOGGLE_LOADING, isLoading: false });
  }).catch(({ error }) => {
    dispatch({ type: SET_ERROR_MESSAGE, message: 'error.status_message' });
    dispatch({ type: TOGGLE_LOADING, isLoading: false });
  });
};
