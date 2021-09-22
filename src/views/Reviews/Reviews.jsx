import React, { useState, useEffect } from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import * as movieAPI from '../../services/API/api_tmdb';
function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI.getMovieReviews(id).then(res => setReviews(res.results));
  }, [id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <h3>No reviews yet</h3>
      ) : (
        reviews.map(review => <ReviewCard key={review.id} review={review} />)
      )}
    </div>
  );
}

export default Reviews;
