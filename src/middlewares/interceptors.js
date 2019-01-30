import axios from 'axios';

export default async () => {
  await axios.interceptors.request.use((config) => {
    const apiKey = {
      api_key: process.env.REACT_APP_API_KEY
    };
    config.params = {
      ...apiKey,
      ...config.params
    };
    config.headers['Content-Type'] = 'application/json';
    return config;
  }, err => Promise.reject(err));
};
