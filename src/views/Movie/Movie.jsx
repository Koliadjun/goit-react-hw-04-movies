import {
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieLinks from '../../components/MovieLinks/MovieLinks';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

function Movie() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const onClickHandler = () => {
    history.push(location?.state?.from ?? '/movies');
  };
  console.log(location?.state);
  return (
    <>
      <button type="button" onClick={onClickHandler}>
        go back
      </button>
      <MovieCard />
      <hr />
      <MovieLinks from={location?.state?.from ?? '/movies'} />
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
