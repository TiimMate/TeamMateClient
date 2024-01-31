import { useState } from 'react';
import { PORTAL_KEYS } from '../../../constants/portalKeys';
import Portal from '../../layouts/Portal';
import Modal from '../Modal/Modal';
import Rating from '../Rating';
import * as S from './ReviewModal.style';
import Button130 from '../../atoms/Button130';

const ReviewModal = ({ isOpen, target, onClose }) => {
  const [guestScore, setGuestScore] = useState(0);
  const [sportsmanshipScore, setSportsmanshipScore] = useState(0);

  const handleGuestRatingChange = (score) => {
    setGuestScore(score);
  };

  const handleSportsmanshipRatingChange = (score) => {
    setSportsmanshipScore(score);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey={PORTAL_KEYS.modalLayout}>
      <Modal title='리뷰 작성' titleAlign='center' onClose={onClose}>
        <S.ReviewLayout>
          <S.ReviewDescription>
            매치는 즐거우셨나요?
            <br />더 나은 매치를 위해 의견을 들려주세요!
          </S.ReviewDescription>

          <S.RatingGroup>
            <Rating
              label={`${target}의 실력은 어떤가요?`}
              score={guestScore}
              onChange={handleGuestRatingChange}
            />
            <Rating
              label='스포츠맨쉽을 보여줬나요?'
              score={sportsmanshipScore}
              onChange={handleSportsmanshipRatingChange}
            />
          </S.RatingGroup>
          <Button130>작성 완료</Button130>
        </S.ReviewLayout>
      </Modal>
    </Portal>
  );
};

export default ReviewModal;
