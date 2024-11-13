import React from 'react';
import './MovieCard.css'; // Import the external CSS file

const MovieCard = ({ movie, onSelect }) => (
  <div className="card" onClick={() => onSelect(movie.id)}>
    <img
      className="movie-image"
      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      alt={movie.title}
    />
    <h3 className="movie-title">{movie.title}</h3>
    <p className="movie-info">Release Date: {movie.release_date}</p>
    <p className="movie-info">Rating: {movie.vote_average}</p>
  </div>
);

export default MovieCard;
