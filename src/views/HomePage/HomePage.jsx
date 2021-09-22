import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieAPI from '../../services/API/api_tmdb';

function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    movieAPI.getTrendingMovie().then(res => setMovieList(res.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
