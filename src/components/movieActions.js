import axios from 'axios';

const API_KEY = '4b0a1242b6517969e0716f2b60796018';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = (query) => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query },
    });
    dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: res.data.results });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message });
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY, append_to_response: 'videos,credits,reviews' },
    });
    dispatch({ type: 'GET_MOVIE_DETAILS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message });
  }
};

export const getRecommendations = (id) => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
      params: { api_key: API_KEY },
    });
    dispatch({ type: 'GET_RECOMMENDATIONS_SUCCESS', payload: res.data.results });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error.message });
  }
};
