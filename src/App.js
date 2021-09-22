import './App.css';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.jsx' /*webpackChunkName: "HomeView"*/),
);
const Movies = lazy(() =>
  import('./views/Movies/Movies.jsx' /*webpackChunkName: "Movies"*/),
);
const NotFondPage = lazy(() =>
  import(
    './views/NotFoundPage/NotFondPage.jsx' /*webpackChunkName: "NotFoundPage"*/
  ),
);
const Movie = lazy(() =>
  import('./views/Movie/Movie.jsx' /*webpackChunkName: "Movie"*/),
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/movies/:movieId">
            <Movie />
          </Route>
          <Route path="/movies/:movieId/cast"></Route>
          <Route path="/movies/:movieId/reviews"></Route>
          <Route>
            <NotFondPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
