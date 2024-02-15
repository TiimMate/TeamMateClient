import { PORTAL_KEYS } from '../../../constants/portalKeys';
import Portal from '../../layouts/Portal';
import Modal from '../Modal/Modal';
import { ModalButtonBlue } from '../Modal/Modal.style';
import * as S from '../MatchingModal/MatchingModal.style';

const MatchingModal = ({ title, content, buttonText, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey={PORTAL_KEYS.modalLayout}>
      <Modal title={title} onClose={onClose}>
        <S.P>{content}</S.P>
        <ModalButtonBlue>{buttonText}</ModalButtonBlue>
      </Modal>
    </Portal>
  );
};

export default MatchingModal;
