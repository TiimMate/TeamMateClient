import React from 'react';
import * as S from './MatchMemberList.style';
import useModal from '../../../hooks/useModal';
import ReviewModal from '../../ui/ReviewModal';
import {
  MEMBER_RAW_DATA_BASKETBALL,
  formatMemberData,
} from '../../../utils/formatData';

function MatchMemberList({ name }) {
  const members = formatMemberData(MEMBER_RAW_DATA_BASKETBALL);

  const { title, description } = members[0].unitInfo;

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <S.Container>
      <S.ProfileImg
        src='../../../assets/svg-profile-img-sample.svg'
        alt={name}
      />

      <S.Space />
      <S.Content>
        <S.TeamName>{`${title}`}</S.TeamName>
        <S.MatchDetail>{`${description}`}</S.MatchDetail>
      </S.Content>
      <S.Space />
      <S.Button onClick={openModal}>리뷰 작성</S.Button>
      <ReviewModal isOpen={isOpen} onClose={closeModal} member={members[0]} />
    </S.Container>
  );
}

export default MatchMemberList;
