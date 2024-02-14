import React, { useState } from 'react';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import * as S from './GuestHost.style';
import { useNavigate } from 'react-router-dom';
import TimePicker from '../../../components/atoms/TimePicker/TimePicker';
import useTeamInfo from '../../../hooks/useTeamInfo';

import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import TeamGenderSelector from '../../../components/ui/Selector/Gender/TeamGenderSelector';
import TeamAgeSelector from '../../../components/ui/Selector/Age/TeamAgeSelector';
import LocationSelector from '../../../components/ui/Selector/Location/LocationSelector';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import Gap from '../../../components/atoms/Gap';

import { formatMemberData } from '../../../utils/formatData';
import useDetectClose from '../../../hooks/UseDetectClose';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function GuestHost() {
  const [teamInfo, dispatch] = useTeamInfo();
  const { logoUrl, name, description, gender, age, location, members } =
    teamInfo;

  const [regionIsOpen, regionRef, regionHandler] = useDetectClose(false);
  const [dropDownRegion, setDropDownRegion] = useState('시간 선택');

  const day = useSelector((state) => state.Day.value);

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
    setRecruitCount(e.target.value);
  };

  const navigate = useNavigate();

  //api에서 문자열로 받아서 일단 문자열로 보내고 다시 객체값으로 변환해서 사용
  let Time = JSON.stringify(time);

  const formattedMembers = formatMemberData(members, {
    formatBtnText: ({ isLeader }) =>
      isLeader === 'false' ? '삭제하기' : '팀장',

    formatOnClickBtn: ({ isLeader, id }) =>
      isLeader === 'false' && (() => dispatch({ type: 'MEMBERS', value: id })),
  });

  let teamid = 1;

  const postContent = () => {
    axios
      .post(
        'http://localhost:4000/guests',

        {
          teamId: teamid,
          gameTime: `${day} ${time.hour}:${time.minute}:00`,
          description: requirements,
          recruitCount: recruitCount,
        },
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
      });
  };

  return (
    <S.Wrapper>
      <LogoUploader
        url={logoUrl}
        setUrl={(url) => dispatch({ type: 'LOGO', value: url })}
      />
      <Gap />

      <S.TeamNameSection>
        <S.Label>팀 이름*</S.Label>
        <S.NameInput
          vlaue={name}
          onChange={(e) => dispatch({ type: 'NAME', value: e.target.value })}
        />

        <S.Label>소개</S.Label>
        <S.TextArea
          vlaue={description}
          onChange={(e) =>
            dispatch({ type: 'DESCRIPTION', value: e.target.value })
          }
          spellCheck='false'
        />
      </S.TeamNameSection>
      <Gap />

      <S.TeamDetailSection>
        <TeamGenderSelector
          selected={gender}
          setSelected={(sel) => dispatch({ type: 'GENDER', value: sel })}
        />

        <TeamAgeSelector
          selected={age}
          setSelected={(sel) => dispatch({ type: 'AGE', value: sel })}
        />

        <LocationSelector
          location={location}
          setLocation={(sel) => dispatch({ type: 'LOCATION', value: sel })}
        />

        <GymSelector />
      </S.TeamDetailSection>

      <Gap height='3.81rem'>
        {/* 제가 만든 부분 */}
        <S.Title>팀원 목록</S.Title>
      </Gap>
      <S.TeamMembersSection>
        <MemberRows members={formattedMembers} />
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
              placeholder='1'
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
              navigate('/matching/guestapply');
              console.log(day);
              postContent();
            }}
          >
            신청하기
          </S.HostButton>
        </S.ButtonSection>
      </S.Main>
    </S.Wrapper>
  );
}
