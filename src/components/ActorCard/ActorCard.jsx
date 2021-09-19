import React from 'react';

function ActorCard({ actor }) {
  const { name, profile_path, character } = actor;
  return (
    <li>
      <img
        width="150"
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        alt=""
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
}
export default ActorCard;
