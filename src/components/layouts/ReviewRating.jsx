import React, { useState } from 'react';
import * as S from './ReviewRating.style';

const ReviewRating = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const stars = Array.from({ length: 5 });

  const handleStarClick = (index) => {
    setSelectedRating(index + 1);
  };

  const updateRating = () => {
    return stars.map((_, index) => (
      <img
        key={index}
        src={
          index < selectedRating
            ? '../../assets/png-review-active.png'
            : '../../assets/png-review-inactive.png'
        }
        alt={index < selectedRating ? '채워진 리뷰' : '빈 리뷰'}
        className='rating__star'
        onClick={() => handleStarClick(index)}
      />
    ));
  };

  return (
    <S.Container>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <div className='rating'>{updateRating()}</div>
    </S.Container>
  );
};

export default ReviewRating;
