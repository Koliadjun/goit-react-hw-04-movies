import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as movieAPI from '../../services/API/api_tmdb';

function MovieCard() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    movieAPI.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <div>
            <img
              width="100"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9556d16312333.5691dd2255721.jpg'
              }
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
        </>
      )}
    </div>
  );
}

export default MovieCard;
