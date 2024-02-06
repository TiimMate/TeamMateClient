import React from 'react';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import * as S from './GuestHost.style';
import { useNavigate } from 'react-router-dom';
import TimePicker from '../../../components/atoms/TimePicker/TimePicker';

export default function GuestHost() {
  const navigate = useNavigate();

  return (
    <S.Main>
      <S.Gap>모임 시간</S.Gap>
      <WeeklyCalendar />
      <TimePicker />
      <S.MatchTimeSection></S.MatchTimeSection>
      <S.Gap>게스트 모집</S.Gap>
      <S.GuestHostSection>
        <S.Label>모집 인원 수*</S.Label>
        <S.HostCountSection>
          <S.HostCountInput value='1'></S.HostCountInput>
          <S.HostCountP>명</S.HostCountP>
        </S.HostCountSection>
        <S.Label>바라는 점</S.Label>
        <S.TextArea spellCheck='false' />
      </S.GuestHostSection>

      <S.ButtonSection>
        <S.HostButton
          onClick={() => {
            navigate('/matching/guestapply');
          }}
        >
          신청하기
        </S.HostButton>
      </S.ButtonSection>
    </S.Main>
  );
}
