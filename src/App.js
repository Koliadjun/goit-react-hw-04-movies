import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './views/HomePage/HomePage';
import Movies from './views/Movies/Movies';
import Navigation from './components/Navigation/Navigation';
import NotFondPage from './views/NotFoundPage/NotFondPage';
import Movie from './views/Movie/Movie';

const App = () => {
  return (
    <>
      <Navigation />
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
    </>
  );
};

export default App;
