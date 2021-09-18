import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../../services/API/api_tmdb';
function HomePage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    movieAPI.getTrendingMovie().then(res => setMovieList(res.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
