import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../../../components/ui/Modal/Modal';

import * as S from './TeamAddModal.style';
import authInstance from '../../../../services/authInstance';

function TeamAddModal({ onClose, category }) {
  const navigate = useNavigate();
  const [isInvited, setIsInvited] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [valid, setValid] = useState(true);
  const [err, setErr] = useState('');

  const fetchInviteCode = async () => {
    try {
      await authInstance.post('/members', { inviteCode });
      alert('추가가 완료되었습니다!');
      window.location.reload();
    } catch (error) {
      setErr(error.response.data.code);
      setValid(false);
    }
  };

  const renderModalContent = () => {
    if (!isInvited) {
      return (
        <>
          <S.PlainButton onClick={() => setIsInvited(true)}>
            팀 초대코드 입력하기
          </S.PlainButton>
          <S.PlainButton
            onClick={() => navigate(`/team/create?category=${category}`)}
          >
            내가 팀 만들기
          </S.PlainButton>
        </>
      );
    } else {
      return (
        <>
          <InviteInput
            type='text'
            placeholder='초대코드 입력'
            value={inviteCode}
            valid={valid}
            onBlur={() => setValid(true)}
            onChange={(e) => setInviteCode(e.target.value)}
            err={err}
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

function InviteInput({ valid, err, ...props }) {
  const setErrorMsg = () => {
    if (err === 'TEAM001')
      return '해당 초대 코드로 가입할 수 있는 팀이 없습니다.';
    if (err === 'MEMBER001') return '해당 팀에 이미 가입되어 있습니다.';
    return '유효하지 않은 접근입니다.';
  };
  return (
    <>
      <S.Input $valid={valid} {...props} />
      {!valid && <S.ErrorMsg>{setErrorMsg()}</S.ErrorMsg>}
    </>
  );
}

export default TeamAddModal;
