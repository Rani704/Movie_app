// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MovieListPage from './pages/MovieListPage';
import FavoriteMoviesPage from './pages/FavoriteMoviesPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li><Link to="/">Movie List</Link></li>
              <li><Link to="/favorites">Favorite Movies</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" component={MovieListPage} />
            <Route path="/favorites" component={FavoriteMoviesPage} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
