import React from 'react';

function ReviewCard({ review }) {
  const { author, content } = review;
  return (
    <li>
      <h3>Author: {author}</h3>
      <p>'{content}'</p>
    </li>
  );
}

export default ReviewCard;
