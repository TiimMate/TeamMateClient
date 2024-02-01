import React from 'react';
import * as S from './GuestApplyDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitInfoRow from '../../../components/ui/UnitInfoRow/UnitInfoRow';
import {
  MEMBER_RAW_DATA_BASKETBALL,
  formatMemberData,
} from '../../../utils/formatData';
import { useNavigate } from 'react-router-dom';

import iconInfo from '../../../assets/icon_info_blue.png';
import iconCalendar from '../../../assets/icon_calendar_blue.png';
import iconPeople from '../../../assets/icon_people_blue.png';
import iconCheck from '../../../assets/icon_check.png';

const TEAM_INFO = {
  name: '어쩌구FC',
  skill: 78,
  manner: 89,
  description:
    '안녕하세요. 저희는 서초구의 상문고등학교에서 매주 일요일에 경기를 진행하는 어쩌구FC라고 합니다.',
};

const MATCH_INFO = {
  time: '1월 14일 일요일 오후 15시',
  gender: '남녀혼성',
  age: '20대',
  level: '아마추어',
};

export default function GuestApplyDetail() {
  const renderMember = () =>
    formatMemberData(MEMBER_RAW_DATA_BASKETBALL).map((member) => (
      <UnitInfoRow
        key={member.id}
        unitInfo={member.unitInfo}
        btnText={member.btnText}
        onClickBtn={member.onClickBtn}
      />
    ));

  const navigate = useNavigate();

  return (
    <S.Main>
      <MainFunctionNavbar />
      <S.TeamNameSection>
        <S.TeamName>{TEAM_INFO.name}</S.TeamName>

        <S.statusDiv>
          <S.levelDiv>
            <S.levelSpan>팀의 실력레벨</S.levelSpan>
            <S.levelGauge>실력레벨</S.levelGauge>
          </S.levelDiv>
          <S.levelDiv>
            <S.levelSpan>팀의 메너레벨</S.levelSpan>
            <S.levelGauge>메너레벨</S.levelGauge>
          </S.levelDiv>
        </S.statusDiv>

        <S.description>{TEAM_INFO.description}</S.description>
      </S.TeamNameSection>

      <S.Gap>모임 정보</S.Gap>

      <S.MatchInfo>
        <S.MatchInfoText>
          <S.Img src={iconCalendar} alt='캘린더아이콘' />
          {MATCH_INFO.time}
        </S.MatchInfoText>
        <S.MatchInfoText>
          <S.Img src={iconPeople} alt='사람아이콘' />
          {MATCH_INFO.gender} | {MATCH_INFO.age}
        </S.MatchInfoText>
        <S.MatchInfoText>
          <S.Img src={iconInfo} alt='인포아이콘' />
          레벨 {MATCH_INFO.level}
        </S.MatchInfoText>
      </S.MatchInfo>

      <S.Gap>팀원 목록</S.Gap>

      <S.TeamMembersSection>{renderMember()}</S.TeamMembersSection>

      <S.Gap>게스트에게 바라는 점</S.Gap>

      <S.RequestPoint>
        <S.Label>바라는 점</S.Label>
        <S.TextArea spellCheck='false' />
      </S.RequestPoint>
      <S.ApplyButtonSection>
        <S.Gap>
          <S.P>
            <S.Img src={iconCheck} alt='체크모양 아이콘' />
            호스트가 수락하면 호스트에게 전화번호를 공개할까요?
          </S.P>
        </S.Gap>

        <S.ApplyButton
          onClick={() => {
            navigate('/matching/guestapply');
          }}
        >
          신청하기
        </S.ApplyButton>
      </S.ApplyButtonSection>
    </S.Main>
  );
}
