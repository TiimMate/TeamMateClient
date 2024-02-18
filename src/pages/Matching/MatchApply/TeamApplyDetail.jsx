import React, { useEffect, useState } from 'react';
import * as S from './GuestApplyDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import useModal from '../../../hooks/useModal';

import { useNavigate, useParams } from 'react-router-dom';

import mapPin from '../../../assets/map-pin2 1.svg';
import iconInfo from '../../../assets/icon_info_blue.png';
import iconCalendar from '../../../assets/icon_calendar_blue.png';
import iconPeople from '../../../assets/icon_people_blue.png';
import MatchingModal from '../../../components/ui/MatchingModal/MatchingModal';
import authInstance from '../../../services/authInstance';
import { formatMembers } from '../../../utils/formatData';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';

export default function TeamApplyDetail() {
  const category = useParams();
  const navigate = useNavigate();

  const { isOpen, openModal, closeModal } = useModal();

  const [matchDetail, setmatchDetail] = useState({
    isSuccess: true,
    code: 2000,
    message: 'success!',
    result: {
      name: 'team1',
      skillLevel: 1,
      mannerLevel: 1,
      description: 'team1',
      status: '모집 완료',
      gusting_info: {
        gameTime: '2024-01-30T15:00:00.000Z',
        gameDuration: '02:00:00',
        gender: '여성',
        ageGroup: '10대',
        gymName: 'gym1',
        skillLevel: '1',
      },
      member_info: {
        leader: {
          nickname: 'user1',
          height: 160,
          position: 'position1',
        },
        member: [
          {
            nickname: 'user2',
            height: 180,
            position: 'position1',
          },
          {
            nickname: 'user3',
            height: 120,
            position: 'position1',
          },
        ],
      },
    },
  });
  const [loading, setLoading] = useState(false);

  //선수 정보 입력 화면
  const navi = () => {
    navigate('/my/update');
  };

  //input 값 post 전달 위함
  const [requirements, setRequirements] = useState('없음');
  const onChangeRequirements = (e) => {
    setRequirements(e.target.value);
  };

  const fetchGuestDetail = async () => {
    try {
      setLoading(true); //로딩이 시작됨
      const response = await authInstance.get(`/games/5`);
      setmatchDetail(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const members = formatMembers(
    matchDetail.result.member_info.leader,
    matchDetail.result.member_info.member,
  );

  useEffect(() => {
    fetchGuestDetail();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (!matchDetail) return null; //matchDetial 값이 유효하지 않는 경우

  const postContent = async (e) => {
    try {
      const response = await authInstance.post('/games/5/application');
      navigate(`/${category}/matching/teamapply`);
    } catch (error) {
      console.log(error);
      openModal();
    }
  };

  //gameTime format
  const GameTime = matchDetail.result.gusting_info.gameTime;
  const year = GameTime[0] + GameTime[1] + GameTime[2] + GameTime[3];
  const month = GameTime[5] + GameTime[6];
  const day = GameTime[8] + GameTime[9];
  const hour = GameTime[11] + GameTime[12];
  const minute = GameTime[14] + GameTime[15];
  const gameTimeFormat = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;

  return (
    <S.Main>
      <MainFunctionNavbar />
      <S.TeamNameSection>
        <S.TeamName>{matchDetail.result.name}</S.TeamName>

        <S.statusDiv>
          <S.levelDiv>
            <S.levelSpan>팀의 실력레벨</S.levelSpan>
            <S.levelGauge>Lv.{matchDetail.result.skillLevel}</S.levelGauge>
          </S.levelDiv>
          <S.levelDiv>
            <S.levelSpan>팀의 메너레벨</S.levelSpan>
            <S.levelGauge>Lv.{matchDetail.result.mannerLevel}</S.levelGauge>
          </S.levelDiv>
        </S.statusDiv>

        <S.description>{matchDetail.result.description}</S.description>
      </S.TeamNameSection>

      <S.Gap>모임 정보</S.Gap>

      <S.MatchInfo>
        <S.MatchInfoText>
          <S.Img src={mapPin} alt='인포아이콘' />
          {matchDetail.result.gusting_info.gymName}
        </S.MatchInfoText>

        <S.MatchInfoText>
          <S.Img src={iconCalendar} alt='캘린더아이콘' />
          {gameTimeFormat} - {matchDetail.result.gusting_info.gameDuration}
        </S.MatchInfoText>

        <S.MatchInfoText>
          <S.Img src={iconPeople} alt='사람아이콘' />
          {matchDetail.result.gusting_info.gender} |
          {matchDetail.result.gusting_info.ageGroup}
        </S.MatchInfoText>

        <S.MatchInfoText>
          <S.Img src={iconInfo} alt='인포아이콘' />
          레벨 {matchDetail.result.gusting_info.skillLevel}
        </S.MatchInfoText>
      </S.MatchInfo>

      <S.Gap>팀원 목록</S.Gap>

      <S.TeamMembersSection>
        <MemberRows members={members} />
      </S.TeamMembersSection>

      <S.Gap>팀에게 바라는 점</S.Gap>

      <S.RequestPoint>
        <S.Label>바라는 점</S.Label>
        <S.TextArea spellCheck='false' />
      </S.RequestPoint>
      <S.ApplyButtonSection>
        <S.Gap />

        <S.ApplyButton
          onClick={() => {
            postContent();
          }}
        >
          신청하기
        </S.ApplyButton>
      </S.ApplyButtonSection>

      <MatchingModal
        title='팀 정보 미입력'
        content='팀 정보를 등록해주세요!'
        buttonText='팀 등록화면으로 이동'
        isOpen={isOpen}
        onClose={closeModal}
        navi={navi}
      />
    </S.Main>
  );
}
