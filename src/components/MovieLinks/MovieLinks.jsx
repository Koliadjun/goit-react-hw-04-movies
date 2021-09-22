import React from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';

function MovieLinks({ from }) {
  const { url } = useRouteMatch();
  return (
    <div>
      <p>additional information</p>
      <ul>
        <li>
          <NavLink
            exact
            to={{ pathname: `${url}/cast`, state: { from: from } }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={{ pathname: `${url}/reviews`, state: { from: from } }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MovieLinks;
