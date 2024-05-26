
import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const FavoriteMovies = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="favorite-movies">
      {favorites.length > 0 ? (
        favorites.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoriteMovies;
