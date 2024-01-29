import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal, {
  ModalButton,
  ModalInput,
  ModalContentWrapper,
} from '../../../../components/ui/Modal/Modal';

import * as S from './TeamAddModal.style';

function TeamAddModal({ onClose }) {
  const navigate = useNavigate();
  const [isInvited, setIsInvited] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const fetchInviteCode = () => {
    // #TODO: 초대코드 로직
  };

  const renderModalContent = () => {
    if (!isInvited) {
      return (
        <>
          <ModalButton onClick={() => setIsInvited(true)}>
            팀 초대코드 입력하기
          </ModalButton>
          <ModalButton onClick={() => navigate('/team/create')}>
            내가 팀 만들기
          </ModalButton>
        </>
      );
    } else {
      return (
        <>
          <ModalInput
            type='text'
            placeholder='초대코드 입력'
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
          />
          <S.ConfirmBtn onClick={fetchInviteCode}>팀 추가하기</S.ConfirmBtn>
        </>
      );
    }
  };

  return (
    <Modal title='우리 팀 추가하기' onClose={onClose}>
      <ModalContentWrapper>{renderModalContent()}</ModalContentWrapper>
    </Modal>
  );
}

export default TeamAddModal;
