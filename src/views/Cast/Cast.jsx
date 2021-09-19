import React, { useState, useEffect } from 'react';
import ActorCard from '../../components/ActorCard/ActorCard';
import * as movieAPI from '../../services/API/api_tmdb';

function Cast({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    movieAPI.getMovieCast(id).then(res => setActors(res.cast));
  }, [id]);

  return (
    <ul>
      {actors &&
        actors.map(actor => <ActorCard key={actor.id} actor={actor} />)}
    </ul>
  );
}

export default Cast;
