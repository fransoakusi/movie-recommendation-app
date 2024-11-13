const initialState = {
    searchResults: [],
    selectedMovie: null,
    recommendations: [],
    loading: false,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_MOVIES_SUCCESS':
        return { ...state, searchResults: action.payload, loading: false };
      case 'GET_MOVIE_DETAILS_SUCCESS':
        return { ...state, selectedMovie: action.payload, loading: false };
      case 'GET_RECOMMENDATIONS_SUCCESS':
        return { ...state, recommendations: action.payload, loading: false };
      case 'LOADING':
        return { ...state, loading: true };
      case 'ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  