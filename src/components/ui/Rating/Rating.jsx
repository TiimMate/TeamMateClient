import * as S from './Rating.style';
import reviewActiveBtn from '../../../assets/png-review-active.png';
import reviewInactiveBtn from '../../../assets/png-review-inactive.png';

const FIRE_IMAGE_URLS = Object.freeze({
  active: reviewActiveBtn,
  inactive: reviewInactiveBtn,
});

const MAX_SCORE = 5;

const Rating = ({ label, score, onChange }) => {
  const handleRatingButtonClick = (index) => {
    if (score === 1 && index === 0) {
      onChange(0);
      return;
    }

    onChange(index + 1);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Box>
        {Array.from({ length: MAX_SCORE }).map((_, index) => (
          <S.RatingButton
            key={index}
            type='button'
            onClick={() => handleRatingButtonClick(index)}
          >
            <S.FireImg
              src={
                score > index
                  ? FIRE_IMAGE_URLS.active
                  : FIRE_IMAGE_URLS.inactive
              }
              alt='불'
            />
          </S.RatingButton>
        ))}
      </S.Box>
    </S.Container>
  );
};

export default Rating;
