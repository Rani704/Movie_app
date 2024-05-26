
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../slices/favoritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);
    const navigate = useNavigate();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-item" onClick={() => navigate(movie.imdb_url)}>
      <img src={movie.image.image} alt={movie.title} />
      <h3>{movie.movie}</h3>
      <p>{movie.imdb_url}</p>
      <p>{movie.rating}</p>
      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(); }}>
        <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
      </button>
    </div>
  );
};

export default MovieItem;
