import React from 'react';
import * as S from './MatchInfo.style';
import useModal from '../../../hooks/useModal';
import ReviewModal from '../../ui/ReviewModal';
import { useNavigate } from 'react-router-dom';
import mapIcon from '../../../assets/icon-map-pin.svg';

export default function MatchReviewInfo({ id, unitInfo = {}, state, page }) {
  const {
    name,
    gameTime,
    region,
    GymName,
    memberCount,
    ageGroup,
    skillLevel,
    gender,
  } = unitInfo;
  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.MatchInfo>
        <S.Time>{gameTime}</S.Time>
        <S.Content
          onClick={() => {
            navigate('/matching/guestapply/detail');
          }}
        >
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
      {/* 상위 컴포넌트에서 받는 page라는 props 값에 따라서 매치 지원 버튼 모달과 리뷰 모달 중 어느것을 띄울지 정하는 코드 */}
      <S.Button onClick={openModal}>리뷰작성</S.Button>

      <ReviewModal isOpen={isOpen} onClose={closeModal} />
    </S.Container>
  );
}
