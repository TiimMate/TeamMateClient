import React from 'react';
import * as S from './MatchMemberList.style';
import useModal from '../../../hooks/useModal';
import ReviewModal from '../../ui/ReviewModal';
import {
  MEMBER_RAW_DATA_BASKETBALL,
  formatMemberData,
} from '../../../utils/formatData';

function MatchMemberList({ member }) {
  const { title, description, avatarUrl } = member;
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <S.Container>
      <S.MemberInfo>
        <S.ProfileImg src={avatarUrl} alt={title} />
        <S.Content>
          <S.TeamName>{`${title}`}</S.TeamName>
          <S.MatchDetail>{`${description}`}</S.MatchDetail>
        </S.Content>
      </S.MemberInfo>
      <S.Button onClick={() => openModal(member)}>리뷰 작성</S.Button>
      <ReviewModal isOpen={isOpen} onClose={closeModal} member={member} />
    </S.Container>
  );
}

export default MatchMemberList;
