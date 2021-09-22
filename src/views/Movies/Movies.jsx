import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as movieAPI from '../../services/API/api_tmdb';

function Movies() {
  const [movieList, setMovieList] = useState();
  const [query, setQuery] = useState('');
  const location = useLocation();
  const history = useHistory();
  const search = new URLSearchParams(location.search).get('query');
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    if (query) {
      movieAPI.searchMovieByQuery(query).then(res => setMovieList(res.results));
    }
  }, [query]);

  useEffect(() => {
    setQuery(search);
  }, [search]);

  const onSubmitHandler = e => {
    e.preventDefault();
    history.push({ ...location, search: `query=${searchInputValue}` });
  };

  const onChangeHandler = e => {
    setSearchInputValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={searchInputValue}
          autoComplete="off"
          type="search"
          onChange={onChangeHandler}
        />
      </form>
      {movieList && (
        <>
          {movieList.length === 0 ? (
            <h2>Please enter different query</h2>
          ) : (
            <h2>Search results:</h2>
          )}
          <ul>
            {movieList.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default Movies;
