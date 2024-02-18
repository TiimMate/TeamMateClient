import React from 'react';

import * as S from './MatchInfo.style';

import useModal from '../../../hooks/useModal';

import ReviewModal from '../../ui/ReviewModal';
import MatchingModal from '../../ui/MatchingModal/MatchingModal';
import { useNavigate, useParams } from 'react-router-dom';
import mapIcon from '../../../assets/icon-map-pin.svg';
import { useDispatch } from 'react-redux';
import CategorySlices from '../../../redux/Slices/CategorySlices';

function MatchInfo({ id, unitInfo, state, page }) {
  const { category } = useParams();
  const dispatch = useDispatch();

  let {
    guestId,
    gameId,
    gameTime,
    teamName,
    teamRegion,
    teamGender,
    memberCount,
    teamAgeGroup,
    teamSkillLevel,
    recruitCount,
  } = unitInfo;

  let buttonColor = 'var(--blue-400, #0075ff)';
  if (recruitCount === 0) {
    buttonColor = 'var(--Gray200, #D9D9D9)';
  } else {
    buttonColor = 'var(--blue-400, #0075ff)';
  }

  gameTime = new Date(gameTime);

  gameTime = new Date(gameTime);
  let gameHour = `${gameTime.getHours() * 1 - 9}`;
  if (gameHour < 10) {
    gameHour = `0${gameHour}`;
  }
  let gameMinute = `${gameTime.getMinutes()}`;
  if (gameMinute < 10) {
    gameMinute = `0${gameMinute}`;
  }

  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();

  dispatch(CategorySlices.actions.change(0));

  let matchType = '';
  page == 'guests' ? (matchType = 'guest') : (matchType = 'team');

  page == 'guests'
    ? dispatch(CategorySlices.actions.change(guestId))
    : dispatch(CategorySlices.actions.change(gameId));

  return (
    <S.Container>
      <S.MatchInfo>
        <S.Time>
          {gameHour}:{gameMinute}
        </S.Time>
        <S.Content
          onClick={() => {
            navigate(`/${category}/matching/${matchType}apply/detail`);
            page == 'guests'
              ? dispatch(CategorySlices.actions.change(guestId))
              : dispatch(CategorySlices.actions.change(gameId));
          }}
        >
          <S.ContentTitle>
            <S.TeamName>{teamName}</S.TeamName>
            <S.LocationInfo>
              <S.LocationIcon>
                <img src={mapIcon} alt='맵 아이콘' />
              </S.LocationIcon>
              <S.LocationName>{teamRegion}</S.LocationName>
            </S.LocationInfo>
          </S.ContentTitle>
          <S.MatchDetail>
            {teamGender} | {memberCount}명 | {teamAgeGroup} | 레벨
            {teamSkillLevel}
          </S.MatchDetail>
        </S.Content>
      </S.MatchInfo>
      <S.Button background={buttonColor}>{recruitCount}명 남음</S.Button>
      {/* 상위 컴포넌트에서 받는 page라는 props 값에 따라서 매치 지원 버튼 모달과 리뷰 모달 중 어느것을 띄울지 정하는 코드 */}
      <MatchingModal
        title='선수 정보 미입력'
        content='선수님의 정보를 입력해주세요!'
        buttonText='선수 정보 입력화면으로 이동'
        isOpen={isOpen}
        onClose={closeModal}
      />
    </S.Container>
  );
}

export default MatchInfo;
