import React, { useEffect, useState } from 'react';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import * as S from './GuestHost.style';
import { useNavigate, useParams } from 'react-router-dom';
import TimePicker from '../../../components/atoms/TimePicker/TimePicker';

import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import Gap from '../../../components/atoms/Gap';

import { formatMembers } from '../../../utils/formatData';
import useDetectClose from '../../../hooks/UseDetectClose';
import { useDispatch, useSelector } from 'react-redux';
import authInstance from '../../../services/authInstance';
import Level from '../../../components/ui/Level/Level';
import useModal from '../../../hooks/useModal';
import MatchingModal from '../../../components/ui/MatchingModal/MatchingModal';
import DaySlices from '../../../redux/Slices/DaySlices';

export default function GuestHost() {
  const { id, category } = useParams();

  const dispatch = useDispatch();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };
  let today = new Date();
  today = formatDate(today);

  const [teamInfo, setTeamInfo] = useState({
    description: '',
    isTeamLeader: false,
    logo: null,
    mannerLevel: 0,
    skillLevel: 0,
    name: '',
    participants: {
      leader: { nickname: '' },
      member: [],
    },
  });

  const [regionIsOpen, regionRef, regionHandler] = useDetectClose(false);
  const [dropDownRegion, setDropDownRegion] = useState('시간 선택');

  const day = useSelector((state) => state.Day.value);

  const { isOpen, openModal, closeModal } = useModal();

  const navi = () => {
    navigate(`/${category}/matching/guestapply`);
  };

  //TimePicker에서 값을 받아오기 위한 함수
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    ampm: 'AM',
    gameTime: 0,
  });

  //input 값 post 전달 위함
  const [requirements, setRequirements] = useState('없음');
  const onChangeRequirements = (e) => {
    setRequirements(e.target.value);
  };
  const [recruitCount, setRecruitCount] = useState(0);
  const onChangeRecuritCount = (e) => {
    setRecruitCount(e.target.value * 1); //숫자로 보내기 위해 *1
  };

  const navigate = useNavigate();

  //api에서 문자열로 받아서 일단 문자열로 보내고 다시 객체값으로 변환해서 사용
  let Time = JSON.stringify(time);

  const members = formatMembers(
    teamInfo.participants.leader,
    teamInfo.participants.member,
  );

  //TeamId 받아오기
  const [teamId, setTeamId] = useState({
    isSuccess: true,
    code: 2000,
    message: 'success!',
    result: [{ id: 2 }],
  });

  const getTeamId = async (e) => {
    try {
      const response = await authInstance.get('/teams', {
        params: {
          category: category,
        },
      });
      setTeamId(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postContent = async (e) => {
    try {
      const response = await authInstance.post(
        '/guests',

        {
          teamId: teamId.result[0].id,
          gameTime: `${day} ${time.hour}:${time.minute}:00`,
          description: requirements,
          gameDuration: '1',
          recruitCount: recruitCount,
        },
      );
      navigate(`/${category}/matching/guestapply`);
    } catch (error) {
      openModal();
      console.error(error);
    }
  };

  const fetchTeam = async () => {
    try {
      const { result } = (
        await authInstance.get(`/teams/${teamId.result[0].id}}`)
      ).data;
      setTeamInfo({ ...result });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeamId();
    fetchTeam();
    dispatch(DaySlices.actions.change(today));
  }, [id, teamId.result[0].id]);

  return (
    <S.Wrapper>
      <S.TeamBanner>
        <S.TeamLogo />
      </S.TeamBanner>

      <S.TeamNameSection>
        <S.TeamName>{teamInfo.name}</S.TeamName>
        <Level />
        <S.description>{teamInfo.description}</S.description>
      </S.TeamNameSection>
      <Gap />
      <S.Title>팀원 목록</S.Title>
      <S.TeamMembersSection>
        <MemberRows members={members} />
      </S.TeamMembersSection>

      <S.Main>
        <S.Gap>모임 시간</S.Gap>
        <WeeklyCalendar />

        <S.MatchTimeSection>
          <TimePicker updateTime={setTime} />
          <S.P>부터</S.P>
          <S.DropdownContainer>
            <S.DropdownButton onClick={regionHandler} ref={regionRef}>
              {dropDownRegion}
            </S.DropdownButton>
            <S.Menu isDropped={regionIsOpen}>
              <S.Ul>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('1시간');
                      time.gameTime = 1;
                    }}
                  >
                    1시간
                  </S.P>
                </S.Li>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('1시간 30분');
                      time.gameTime = 1.5;
                    }}
                  >
                    1시간 30분
                  </S.P>
                </S.Li>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('2시간');
                      time.gameTime = 2;
                    }}
                  >
                    2시간
                  </S.P>
                </S.Li>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('2시간 30분');
                      time.gameTime = 2.5;
                    }}
                  >
                    2시간 30분
                  </S.P>
                </S.Li>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('3시간');
                      time.gameTime = 3;
                    }}
                  >
                    3시간
                  </S.P>
                </S.Li>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('3시간 30분');
                      time.gameTime = 3.5;
                    }}
                  >
                    3시간 30분
                  </S.P>
                </S.Li>
                <S.Li>
                  <S.P
                    onClick={() => {
                      setDropDownRegion('4시간');
                      time.gameTime = 4;
                    }}
                  >
                    4시간
                  </S.P>
                </S.Li>
              </S.Ul>
            </S.Menu>
          </S.DropdownContainer>
        </S.MatchTimeSection>
        <S.Gap>게스트 모집</S.Gap>
        <S.GuestHostSection>
          <S.Label>모집 인원 수*</S.Label>
          <S.HostCountSection>
            <S.HostCountInput
              placeholder='0'
              onChange={onChangeRecuritCount}
            ></S.HostCountInput>
            <S.HostCountP>명</S.HostCountP>
          </S.HostCountSection>
          <S.Label>바라는 점</S.Label>
          <S.TextArea spellCheck='false' onChange={onChangeRequirements} />
        </S.GuestHostSection>
        {/* 제가만든부분 */}

        <S.ButtonSection>
          <S.HostButton
            onClick={() => {
              postContent();
            }}
          >
            신청하기
          </S.HostButton>
        </S.ButtonSection>
      </S.Main>
      <MatchingModal
        title='팀장이 아니에요!'
        content='팀장만 글을 올릴 수 있습니다!'
        buttonText='글 목록으로 이동'
        isOpen={isOpen}
        onClose={closeModal}
        navi={navi}
      />
    </S.Wrapper>
  );
}
