import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../../../components/ui/Modal/Modal';

import * as S from './TeamAddModal.style';

function TeamAddModal({ onClose }) {
  const navigate = useNavigate();
  const [isInvited, setIsInvited] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [valid, setValid] = useState(true);

  const fetchInviteCode = () => {
    setValid(false);
  };

  const renderModalContent = () => {
    if (!isInvited) {
      return (
        <>
          <S.PlainButton onClick={() => setIsInvited(true)}>
            팀 초대코드 입력하기
          </S.PlainButton>
          <S.PlainButton onClick={() => navigate('/team/create')}>
            내가 팀 만들기
          </S.PlainButton>
        </>
      );
    } else {
      return (
        <>
          <S.ModalInput
            type='text'
            placeholder='초대코드 입력'
            value={inviteCode}
            valid={valid}
            onBlur={() => setValid(true)}
            onChange={(e) => setInviteCode(e.target.value)}
            message='초대코드가 올바르지 않습니다.'
          />
          <S.ConfirmBtn onClick={fetchInviteCode}>팀 추가하기</S.ConfirmBtn>
        </>
      );
    }
  };

  return (
    <Modal title='우리 팀 추가하기' onClose={onClose}>
      <S.Container>{renderModalContent()}</S.Container>
    </Modal>
  );
}

export default TeamAddModal;
