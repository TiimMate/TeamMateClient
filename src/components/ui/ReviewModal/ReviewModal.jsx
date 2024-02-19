import { useState } from 'react';
import { PORTAL_KEYS } from '../../../constants/portalKeys';
import Portal from '../../layouts/Portal';
import Modal from '../Modal/Modal';
import Rating from '../Rating';
import * as S from './ReviewModal.style';
import Button130 from '../../atoms/Button130';
import {
  createGuestReview,
  createTeamReview,
} from '../../../services/reviewService';

const ReviewModal = ({
  isOpen,
  target,
  onClose,
  type,
  teamMatchId,
  guestMatchId,
}) => {
  const [skillScore, setSkillScore] = useState(0);
  const [mannerScore, setMannerScore] = useState(0);

  const handleSkillScoreChange = (score) => {
    setSkillScore(score);
  };

  const handleMannerScoreChange = (score) => {
    setMannerScore(score);
  };

  const handleSubmitButtonClick = async () => {
    if (target === 'guest') {
      await createGuestReview(guestMatchId);
      // await createGuestReview(revieweeId); // 수정필요 OK (백앤드 아이디값 확인 필요)
    } else {
      await createTeamReview({
        teamMatchId,
        guestMatchId,
        skillScore,
        mannerScore,
      });
    }

    onClose();
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
              score={skillScore}
              onChange={handleSkillScoreChange}
            />
            <Rating
              label='스포츠맨쉽을 보여줬나요?'
              score={mannerScore}
              onChange={handleMannerScoreChange}
            />
          </S.RatingGroup>
          <Button130
            disabled={skillScore === 0 || mannerScore === 0}
            onClick={handleSubmitButtonClick}
          >
            작성 완료
          </Button130>
        </S.ReviewLayout>
      </Modal>
    </Portal>
  );
};

export default ReviewModal;
