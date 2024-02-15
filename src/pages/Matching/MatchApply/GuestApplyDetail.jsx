import React, { useEffect, useState } from 'react';
import * as S from './GuestApplyDetail.style';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitInfoRow from '../../../components/ui/UnitInfoRow/UnitInfoRow';
import useModal from '../../../hooks/useModal';

import { useNavigate } from 'react-router-dom';

import iconInfo from '../../../assets/icon_info_blue.png';
import iconCalendar from '../../../assets/icon_calendar_blue.png';
import iconPeople from '../../../assets/icon_people_blue.png';
import axios from 'axios';
import MatchingModal from '../../../components/ui/MatchingModal/MatchingModal';

export default function GuestApplyDetail() {
  const navigate = useNavigate();

  const { isOpen, openModal, closeModal } = useModal();

  const [matchDetail, setmatchDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  //input 값 post 전달 위함
  const [requirements, setRequirements] = useState('없음');
  const onChangeRequirements = (e) => {
    setRequirements(e.target.value);
  };

  const fetchGuestDetail = async () => {
    try {
      setmatchDetail(null);
      setLoading(true); //로딩이 시작됨
      const response = await axios.get(`http://localhost:4000/guests/10`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('kakao_access_token')}`,
        },
      });
      setmatchDetail(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGuestDetail();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (!matchDetail) return null; //matchDetial 값이 유효하지 않는 경우

  const postContent = () => {
    axios
      .post(
        'http://localhost:4000/guests/1/application',

        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'kakao_access_token',
            )}`,
          },
        },
      )
      .catch((error) => {
        console.error(error);
        openModal();
      });
  };

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
          <S.Img src={iconCalendar} alt='캘린더아이콘' />
          {matchDetail.result.gusting_info.gymName}
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
        <UnitInfoRow unitInfo={matchDetail.result.member_info.leader} />
      </S.TeamMembersSection>

      <S.Gap>게스트에게 바라는 점</S.Gap>

      <S.RequestPoint>
        <S.Label>바라는 점</S.Label>
        <S.TextArea spellCheck='false' />
      </S.RequestPoint>
      <S.ApplyButtonSection>
        <S.Gap />

        <S.ApplyButton
          onClick={() => {
            navigate('/matching/guestapply');
            postContent();
          }}
        >
          신청하기
        </S.ApplyButton>
      </S.ApplyButtonSection>

      <MatchingModal
        title='선수 정보 미입력'
        content='선수님의 정보를 입력해주세요!'
        buttonText='선수 정보 입력화면으로 이동'
        isOpen={isOpen}
        onClose={closeModal}
      />
    </S.Main>
  );
}
