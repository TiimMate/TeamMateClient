import React from 'react';
import * as S from './MatchList.style';
import MatchReviewInfo from './MatchReviewInfo';

const dummy = [
  {
    type: 'host',
    matchId: 3,
    gameTime: '2024-01-30T13:00:00.000Z',
    name: '우리팀이름은어쩌구',
    region: '서울 성동구',
    gender: '남성',
    memberCount: 3,
    ageGroup: '20대',
    skillLevel: 30,
    reviewStatus: 'COMPLETED',
  },
  {
    type: 'guest',
    matchId: 2,
    gameTime: '2024-01-30T15:00:00.000Z',
    name: '코티스트',
    region: '서울 용산구',
    gender: '여성',
    memberCount: 3,
    ageGroup: '10대',
    skillLevel: 1,
    reviewStatus: 'UNCOMPLETED',
  },
  {
    type: 'guest',
    matchId: 3,
    gameTime: '2024-01-30T15:00:00.000Z',
    name: '팀메이트',
    region: '서울 중구',
    gender: '여성',
    memberCount: 3,
    ageGroup: '10대',
    skillLevel: 1,
    reviewStatus: 'PENDING',
  },
];

export default function MatchHistoryList() {
  return (
    <S.Wrapper>
      {dummy.map(
        ({
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
        }) => (
          <MatchReviewInfo
            key={matchId}
            type={type}
            matchId={matchId}
            name={name}
            gameTime={gameTime}
            region={region}
            gender={gender}
            memberCount={memberCount}
            ageGroup={ageGroup}
            skillLevel={skillLevel}
            reviewStatus={reviewStatus}
          />
        ),
      )}
    </S.Wrapper>
  );
}
