import React from 'react';

import * as S from './MatchInfo.style';

import useModal from '../../../hooks/useModal';

import ReviewModal from '../../ui/ReviewModal';
import MatchingModal from '../../ui/MatchingModal/MatchingModal';
import { useNavigate } from 'react-router-dom';

function MatchInfo({ id, unitInfo, state, page }) {
  const { title, date, time, Region, GymName, Capacity, age, level, gender } =
    unitInfo;

  const { isOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();

  return (
    <S.Container>
      <S.MatchInfo>
        <S.Time>{time}</S.Time>
        <S.Content
          onClick={() => {
            navigate('/matching/guestapply/detail');
          }}
        >
          <S.TeamName>{title}</S.TeamName>
          <S.MatchLocation>{Region}</S.MatchLocation>
          <S.MatchDetail>
            {gender} | {Capacity}명 | {age} | 레벨{level}
          </S.MatchDetail>
        </S.Content>
      </S.MatchInfo>
      {/* 상위 컴포넌트에서 받는 page라는 props 값에 따라서 매치 지원 버튼 모달과 리뷰 모달 중 어느것을 띄울지 정하는 코드 */}
      <S.Button onClick={openModal}>{state}명 남음</S.Button>
      {page === 'apply' ? (
        <MatchingModal
          title='선수 정보 미입력'
          isOpen={isOpen}
          onClose={closeModal}
        />
      ) : (
        <ReviewModal isOpen={isOpen} onClose={closeModal} />
      )}
    </S.Container>
  );
}

export default MatchInfo;
