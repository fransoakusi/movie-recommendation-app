import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails, getRecommendations } from './movieActions';
import MovieCard from './MovieCard';
import './MovieDetail.css'; // Import the external CSS file

const MovieDetail = ({ movieId }) => {
  const dispatch = useDispatch();
  const { selectedMovie, recommendations } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    dispatch(getRecommendations(movieId));
  }, [dispatch, movieId]);

  if (!selectedMovie) return <p>Loading movie details...</p>;

  return (
    <div className="movie-detail">
      <h2 className="movie-detail__title">{selectedMovie.title}</h2>
      <p className="movie-detail__overview">{selectedMovie.overview}</p>
      <h3 className="movie-detail__subtitle">Cast:</h3>
      <ul className="movie-detail__cast">
        {selectedMovie.credits.cast.slice(0, 5).map((cast) => (
          <li key={cast.id} className="movie-detail__cast-item">
            {cast.name} as {cast.character}
          </li>
        ))}
      </ul>
      <h3 className="movie-detail__subtitle">Recommendations:</h3>
      <div className="movie-detail__recommendations">
        {recommendations.map((rec) => (
          <MovieCard key={rec.id} movie={rec} onSelect={() => dispatch(getMovieDetails(rec.id))} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
