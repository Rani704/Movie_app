
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../slices/moviesSlice';
import MovieItem from './MovieItem';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
