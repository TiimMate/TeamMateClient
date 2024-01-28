import { PORTAL_KEYS } from '../../../constants/portalKeys';
import Portal from '../../layouts/Portal';
import Modal from '../Modal/Modal';
import * as S from './ReviewModal.style';

const ReviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const REVIEW_TITLE_LIST = [
    {
      title: '팀 실력은 어떤가요?',
    },
    {
      title: '스포츠맨쉽을 보여줬나요?',
    },
  ];

  return (
    <Portal portalKey={PORTAL_KEYS.modalLayout}>
      <Modal title='리뷰 작성' onClose={onClose}>
        <S.ReviewLayout>
          <S.ReviewDescription>
            매치는 즐거우셨나요?
            <br />더 나은 매치를 위해 의견을 들려주세요!
          </S.ReviewDescription>
          <S.ReviewContainer>
            <S.ReviewContent>
              {REVIEW_TITLE_LIST.map(({ title }) => (
                <S.ReviewTitle key={title}>{title}</S.ReviewTitle>
              ))}
              <S.ReviewCheckbox>
                <S.ReviewCheck>e</S.ReviewCheck>
              </S.ReviewCheckbox>
            </S.ReviewContent>
          </S.ReviewContainer>
        </S.ReviewLayout>
      </Modal>
    </Portal>
  );
};

export default ReviewModal;
