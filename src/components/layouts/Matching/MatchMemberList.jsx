import React, { useMemo } from 'react';
import * as S from './MatchMemberList.style';
import useModal from '../../../hooks/useModal';
import ReviewModal from '../../ui/ReviewModal';

export default function MatchMemberList({
  member,
  type,
  matchId,
  name,
  gameTime,
  region,
  gender,
  memberCount,
  ageGroup,
  skillLevel,
  reviewStatus,
}) {
  const { title, description, avatarUrl } = member;
  const { isOpen, openModal, closeModal } = useModal();

  const reviewButtonText = useMemo(() => {
    switch (reviewStatus) {
      case 'COMPLETED':
        return '리뷰 완료';

      case 'UNCOMPLETED':
        return '리뷰 작성';

      // 경기 시간 이전에는 해당 페이지로 이동 불가 (이전 페이지에서 이미 버튼 비활성화)
    }
  }, [reviewStatus]);

  const handleReviewButtonClick = () => {
    if (reviewStatus === 'UNCOMPLETED') {
      openModal();
    }
    return;
  };

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
