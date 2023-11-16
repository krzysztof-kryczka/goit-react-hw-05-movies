import axios from 'axios';
import Notiflix from 'notiflix';

import {
  API_KEY,
  API_BASE_URL,
  API_ENDPOINTS,
  ERROR_MESSAGE,
} from '#consts/consts';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.params = { api_key: API_KEY };

// a list of the most popular movies for today to create a collection on the home page page.
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios(API_ENDPOINTS.TRENDING_MOVIES);
    return response.data.results;
  } catch {
    throw new Error(Notiflix.Notify.failure(ERROR_MESSAGE));
  }
};

// Request full movie info for the movie page.
export const fetchMovieDetailsById = async (id, extraInfo = '') => {
  const extraInfoPath = extraInfo ? `/${extraInfo}` : '';
  try {
    const response = await axios(
      `${API_ENDPOINTS.MOVIE_DETAILS}${id}${extraInfoPath}`
    );
    return response.data;
  } catch {
    throw new Error(Notiflix.Notify.failure(ERROR_MESSAGE));
  }
};

// keyword search for a movie on the movies page.
export const fetchMovieByKeyword = async search => {
  const queryParams = `?query=${search}`;
  try {
    const response = await axios(`${API_ENDPOINTS.SEARCH_MOVIE}${queryParams}`);
    return response.data.results;
  } catch {
    throw new Error(Notiflix.Notify.failure(ERROR_MESSAGE));
  }
};
