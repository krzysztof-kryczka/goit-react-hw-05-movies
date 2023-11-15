import axios from 'axios';
import Notiflix from "notiflix";

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
    throw new Error(Notiflix.Notify.failure((ERROR_MESSAGE)));
  }
};
