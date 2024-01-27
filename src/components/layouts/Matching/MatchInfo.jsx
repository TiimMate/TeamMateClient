import React from 'react';

import * as S from './MatchInfo.style';

function MatchInfo({ id, unitInfo, state }) {
  const { title, date, time, Region, GymName, Capacity, age, level, gender } =
    unitInfo;
  return (
    <S.Container>
      <S.Time>{time}</S.Time>
      <S.Space />
      <S.Content>
        <S.TeamName>{title}</S.TeamName>
        <S.MatchLocation>{Region}</S.MatchLocation>
        <S.MatchDetail>
          {gender}|{Capacity}명|{age}|레벨{level}
        </S.MatchDetail>
      </S.Content>
      <S.Space />
      <S.Button>{state}명 남음</S.Button>
    </S.Container>
  );
}

export default MatchInfo;
