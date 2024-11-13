import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

const App = () => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        {selectedMovieId ? (
          <MovieDetail movieId={selectedMovieId} />
        ) : (
          <MovieList onSelect={setSelectedMovieId} />
        )}
      </div>
    </Provider>
  );
};

export default App;
