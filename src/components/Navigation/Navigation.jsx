import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

function Navigation() {
  return (
    <>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink exact to="/" className={s.link} activeClassName={s.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={s.link} activeClassName={s.active}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
