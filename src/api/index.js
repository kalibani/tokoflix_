import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const getNowPlayingMovies = params => axios.get(`${API_URL}/now_playing`, { params });

export const getNowPlayingMovie = (movieId, params) => axios.get(`${API_URL}/${movieId}`, { params });
