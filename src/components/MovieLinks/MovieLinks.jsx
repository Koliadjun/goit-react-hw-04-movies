import React from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';

function MovieLinks() {
  const { url } = useRouteMatch();
  return (
    <div>
      <p>additional information</p>
      <ul>
        <li>
          <NavLink exact to={`${url}/cast`}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink exact to={`${url}/reviews`}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MovieLinks;
