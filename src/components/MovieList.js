import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import './MovieList.css';  // Import the external CSS file

const MovieList = ({ onSelect }) => {
  const { searchResults, loading } = useSelector((state) => state.movies);

  if (loading) return <p className="loading-text">Loading...</p>;

  return (
    <div className="movie-list">
      {searchResults.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default MovieList;
