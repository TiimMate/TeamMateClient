import { PORTAL_KEYS } from '../../../constants/portalKeys';
import Portal from '../../layouts/Portal';
import Modal from '../Modal/Modal';
import { ModalButtonBlue } from '../Modal/Modal.style';
import * as S from '../MatchingModal/MatchingModal.style';

const MatchingModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey={PORTAL_KEYS.modalLayout}>
      <Modal title='팀 정보 미입력' onClose={onClose}>
        <S.P>매칭을 위해 회원님의 팀 정보를 입력해주세요!</S.P>
        <ModalButtonBlue>팀 정보로 이동</ModalButtonBlue>
      </Modal>
    </Portal>
  );
};

export default MatchingModal;
