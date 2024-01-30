import React from 'react';
import * as S from './GuestApplyDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitInfoRow from '../../../components/ui/UnitInfoRow';

const dummy = [
  {
    id: 1,
    unitInfo: {
      title: '타이틀 1',
      description: '이것은 더미 데이터입니다.',
      date: '1월 17일',
      avatarUrl: '/assets/highfive.png',
    },
    btnText: '삭제하기',
    onClickBtn: null,
  },
  {
    id: 2,
    unitInfo: {
      title: '타이틀 2',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 없음',
    onClickBtn: () => {},
  },
  {
    id: 3,
    unitInfo: {
      title: '타이틀 3',
      description: '스타일링 연습 중입니다.',
      date: '2월 1일',
    },
    btnText: '작게',
    onClickBtn: null,
  },
  {
    id: 4,
    unitInfo: {
      title: '타이틀 4',
      description: '더미 데이터 예제입니다.',
    },
    onClickBtn: () => {},
  },
  {
    id: 5,
    unitInfo: {
      title: '타이틀 5',
      description: '더미 데이터 예제입니다.',
      date: '3월 12일',
    },
  },
  {
    id: 6,
    unitInfo: {
      title: '타이틀 6',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 좀 더 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 7,
    unitInfo: {
      title: '타이틀 7',
      description: '더미 데이터 예제입니다.',
      date: '4월 7일',
    },
    btnText: '버튼 텍스트가 긴 경우',
    onClickBtn: null,
  },
  {
    id: 8,
    unitInfo: {
      title: '타이틀 8',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 아주 아주 아주 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 9,
    unitInfo: {
      title: '타이틀 9',
      description: '더미 데이터 예제입니다.',
      date: '5월 20일',
    },
    btnText: '버튼 길이가 길면 어떨까요?',
    onClickBtn: null,
  },
  {
    id: 10,
    unitInfo: {
      title: '타이틀 10',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '팀장',
    onClickBtn: () => {},
  },
];

export default function GuestApplyDetail() {
  return (
    <S.Main>
      <MainFunctionNavbar />
      <S.TeamInfo>
        <S.TeamName>체육관이름</S.TeamName>
        <S.LevelContainer>
          <S.LevelLabel>팀의 실력레벨</S.LevelLabel>
          <S.LevelValue>Lv.14</S.LevelValue>
          <S.LevelLabel>팀의 실력레벨</S.LevelLabel>
          <S.LevelValue>Lv.17</S.LevelValue>
        </S.LevelContainer>
        <S.TeamExplainContainer>
          <S.TeamExplain>
            안녕하세요. 저희는 서초구의 상문고등학교에서 매주 일요일에 경기를
            진행하는 어쩌구FC라고 합니다.
          </S.TeamExplain>
        </S.TeamExplainContainer>
      </S.TeamInfo>

      <S.Gap>모임 정보</S.Gap>

      <S.MatchInfo>
        <S.MatchInfoText>1월 14일 일요일 오후 15시</S.MatchInfoText>
        <S.MatchInfoText>남녀혼성 | 20대</S.MatchInfoText>
        <S.MatchInfoText>레벨 아마추어</S.MatchInfoText>
      </S.MatchInfo>

      <S.Gap>팀원 목록</S.Gap>

      <S.MemberList>
        {dummy.map((info) => (
          <UnitInfoRow
            key={info.id}
            unitInfo={info.unitInfo}
            btnText={info.btnText}
            onClickBtn={info.onClickBtn}
          />
        ))}
      </S.MemberList>

      <S.Gap>게스트에게 바라는 점</S.Gap>

      <S.RequestPoint>
        <S.P>바라는 점</S.P>
        <S.RequestInput type='text' value='요청사항을 입력하세요' />
      </S.RequestPoint>
      <S.ApplyButtonContainer>
        <S.P>호스트가 수락하면 호스트에게 전화번호를 공개할까요?</S.P>
        <S.ApplyButton>신청하기</S.ApplyButton>
      </S.ApplyButtonContainer>
    </S.Main>
  );
}
