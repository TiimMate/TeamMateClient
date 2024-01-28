import { PORTAL_KEYS } from '../../../constants/portalKeys';
import Portal from '../../layouts/Portal';
import Modal from '../Modal/Modal';

const ReviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey={PORTAL_KEYS.modalLayout}>
      <Modal title='리뷰 작성' onClose={onClose}>
        test test refv
      </Modal>
    </Portal>
  );
};

export default ReviewModal;
