// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import favoritesReducer from './slices/favoritesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});
