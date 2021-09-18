import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as movieAPI from '../../services/API/api_tmdb';

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    movieAPI.getMovieById(movieId).then(setMovie);
  }, [movieId]);
  console.dir(movie);
  return (
    <div>
      <div>
        <img
          width="100"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Poster_image"
        />
      </div>
      <div>
        <h2>{movie.original_title}</h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres.map(item => item.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default Movie;
