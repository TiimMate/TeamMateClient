import React from 'react';
import * as S from './MatchList.style';
import MatchInfo from './MatchInfo';

const dummy = [
  {
    type: 'game',
    matchId: 3,
    gameTime: '2024-01-30T13:00:00.000Z',
    name: '우리팀이름은어쩌구',
    region: '서울 성동구',
    gender: '남성',
    memberCount: 3,
    ageGroup: '20대',
    skillLevel: 30,
  },
  {
    type: 'guest',
    matchId: 2,
    gameTime: '2024-01-30T15:00:00.000Z',
    gameDuration: '02:30:00',
    name: '코티스트',
    region: '서울 용산구',
    gender: '여성',
    memberCount: 3,
    ageGroup: '10대',
    skillLevel: 1,
  },
  {
    type: 'guest',
    matchId: 3,
    gameTime: '2024-01-30T15:00:00.000Z',
    gameDuration: '02:30:00',
    name: '팀메이트',
    region: '서울 중구',
    gender: '여성',
    memberCount: 3,
    ageGroup: '10대',
    skillLevel: 1,
  },
];

export default function MatchHistoryList() {
  return (
    <S.Wrapper>
      {dummy.map((info, index) => (
        <MatchInfo
          key={index}
          id={info.matchId}
          unitInfo={{
            title: info.name,
            date: new Date(info.gameTime).toLocaleDateString(),
            time: new Date(info.gameTime).toLocaleTimeString(),
            GymName: '',
            Capacity: info.memberCount,
            Region: info.region,
            age: info.ageGroup,
            level: info.skillLevel,
            gender: info.gender,
          }}
          state={info.type === 'game' ? 1 : 0}
          page={info.type === 'game' ? 'game' : 'guest'}
        />
      ))}
    </S.Wrapper>
  );
}
