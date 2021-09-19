import { Route, useParams, useRouteMatch } from 'react-router';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieLinks from '../../components/MovieLinks/MovieLinks';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

function Movie() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  return (
    <>
      <MovieCard />
      <hr />
      <MovieLinks />
      <hr />
      <Route exact path={`${url}/cast`}>
        <Cast id={movieId} />
      </Route>
      <Route exact path={`${url}/reviews`}>
        <Reviews id={movieId} />
      </Route>
    </>
  );
}

export default Movie;
