import { getNowPlayingMovies } from '../../api';

export const SET_DATA_MOVIES = 'movies/SET_DATA_MOVIES';
export const TOGGLE_LOADING = 'movies/TOGGLE_LOADING';

export const fetchNowPlayingMovies = () => async (dispatch) => {
  const queryString = {
    api_key: '198a31da2bd7deb419ba1915ce2e8303',
    language: 'id-ID',
    page: 1,
    region: 'id'
  };
  dispatch({
    type: TOGGLE_LOADING,
    isLoading: true
  });
  try {
    const movies = await getNowPlayingMovies(queryString);
    console.warn(movies);
    // if (movies.length > 0) {
    //   dispatch({
    //     type: SET_DATA_MOVIES,
    //     movies
    //   });
    // }
  } catch (error) {
    console.warn(error);
  } finally {
    dispatch({
      type: TOGGLE_LOADING,
      isLoading: true
    });
  }
};
