import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAccesToken = params => axios.get(`${API_URL}/authentication/token/new`, { params });
export const getNowPlayingMovies = params => axios.get(`${API_URL}/now_playing?language=${params.language}&page=${params.page}&region=${params.region}`);
export const getNowPlayingMovie = params => axios.get(`${API_URL}/now_playing`, { params });
