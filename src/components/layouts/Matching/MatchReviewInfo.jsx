import React, { useMemo } from 'react';
import * as S from './MatchInfo.style';
import useModal from '../../../hooks/useModal';
import ReviewModal from '../../ui/ReviewModal';
import { useNavigate } from 'react-router-dom';
import mapIcon from '../../../assets/icon-map-pin.svg';

const TYPE_TEXT = {
  guest: '팀',
  host: '게스트',
};

export default function MatchReviewInfo({
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
  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();

  const convertToKoreanTime = (utcTimeString) => {
    const utcDate = new Date(utcTimeString);
    const koreanTime = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
    return koreanTime.toLocaleTimeString('ko-KR', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const reviewButtonText = useMemo(() => {
    switch (reviewStatus) {
      case 'COMPLETED':
        return '리뷰 완료';

      case 'UNCOMPLETED':
        return '리뷰 작성';

      case 'PENDING':
        return `${convertToKoreanTime(gameTime)} 예정`;
    }
  }, [reviewStatus, gameTime]);

  const handleReviewButtonClick = () => {
    if (reviewStatus === 'UNCOMPLETED') {
      openModal();
    }
  };

  return (
    <S.Container>
      <S.MatchInfo>
        <S.Time>{convertToKoreanTime(gameTime)}</S.Time>
        <S.Content>
          <S.ContentTitle>
            <S.TeamName>{name}</S.TeamName>
            <S.LocationInfo>
              <S.LocationIcon>
                <img src={mapIcon} alt='맵 아이콘' />
              </S.LocationIcon>
              <S.LocationName>{region}</S.LocationName>
            </S.LocationInfo>
          </S.ContentTitle>
          <S.MatchDetail>
            {gender} | {memberCount}명 | {ageGroup} | 레벨{skillLevel}
          </S.MatchDetail>
        </S.Content>
      </S.MatchInfo>
      <S.Button
        type='button'
        onClick={handleReviewButtonClick}
        reviewStatus={reviewStatus}
      >
        {reviewButtonText}
      </S.Button>

      <ReviewModal
        isOpen={isOpen}
        onClose={closeModal}
        target={TYPE_TEXT[type]}
      />
    </S.Container>
  );
}
