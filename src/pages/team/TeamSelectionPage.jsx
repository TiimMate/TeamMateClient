import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Modal, {
  ModalButton,
  ModalButtonBlue,
  ModalInput,
  ModalContentWrapper,
} from '../../components/ui/Modal';
import CircleLogo from '../../components/atoms/CircleLogo';

// #TODO: fetch list...
const SPORT_OPTIONS = [
  { id: 1, sport: '축구' },
  { id: 2, sport: '농구' },
  { id: 3, sport: '야구' },
];
const TEAM_INFOS = [
  { id: 1, name: '어쩌구 FC', logoUrl: '#' },
  { id: 2, name: '저쩌구 FC', logoUrl: '#' },
  { id: 3, name: '하남 FC', logoUrl: '#' },
  { id: 4, name: '다른스타일도보고싶네', logoUrl: '#' },
  { id: 5, name: '하남 FC', logoUrl: '#' },
];
const TEAMS_INFOS = [
  { id: 1, name: '저쩌구 FC', logoUrl: '#' },
  { id: 2, name: '어쩌구 FC', logoUrl: '#' },
  { id: 3, name: '성남 FC', logoUrl: '#' },
  { id: 4, name: '시간', logoUrl: '#' },
  { id: 5, name: '성남 FC', logoUrl: '#' },
];
const COLOR_LIST = ['#0075ff', '#86ff91'];

function TeamSelectionPage() {
  const navigate = useNavigate();
  const [sport, setSport] = useState('2');
  const [teamInfos, setTeamInfos] = useState(TEAM_INFOS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderTeam = () =>
    teamInfos.map((info, index) => {
      const backgroundColor = COLOR_LIST[index % COLOR_LIST.length]; // 번갈아 가면서 color 선택
      const onClick = () => {
        navigate(`/team/${info.id}`);
      };

      if (index === teamInfos.length - 1) {
        // If last
        return (
          <Team
            last
            backgroundColor={backgroundColor}
            onClick={onClick}
            teamInfo={info}
            key={info.id}
          />
        );
      }
      return (
        <Team
          backgroundColor={backgroundColor}
          onClick={onClick}
          teamInfo={info}
          key={info.id}
        />
      );
    });

  const onClickAddTeam = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (sport === '2') {
      setTeamInfos(TEAMS_INFOS); // #TODO: Fetch Team infos
    } else setTeamInfos(TEAM_INFOS);
  }, [sport]);

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal title='우리 팀 추가하기' onClose={onCloseModal}>
          <TeamAdditionModal navigate={navigate} />
        </Modal>
      )}

      <SportSelectionSection>
        종목 선택
        <br />
        <SportSelect value={sport} onChange={(e) => setSport(e.target.value)}>
          {' '}
          {/* #TODO mobile view에서 select dropdown 튀어나오는 문제 해결 */}
          {SPORT_OPTIONS.map((option) => (
            <option value={option.id} key={option.id}>
              {option.sport}
            </option>
          ))}
        </SportSelect>
      </SportSelectionSection>

      <TeamSelectionSection>
        {renderTeam()}
        <AddTeam onClick={onClickAddTeam} />
      </TeamSelectionSection>
    </Wrapper>
  );
}

function Team({ last, backgroundColor, onClick, teamInfo }) {
  const { name, logoUrl } = teamInfo;
  return (
    <TeamDiv onClick={onClick} $backgroundColor={backgroundColor}>
      <TeamName>{name}</TeamName>
      <TeamLogo logoUrl={logoUrl} />
      {last || <TeamImage src='assets/highfive.png' alt='img' />}
    </TeamDiv>
  );
}

function AddTeam({ onClick }) {
  return (
    <AddTeamDiv onClick={onClick} backgroundColor='var(--Gray200, #D9D9D9)'>
      <PlusIcon src='assets/plus.svg' alt='plus' />
      <AddText>팀 추가하기</AddText>
    </AddTeamDiv>
  );
}

function TeamAdditionModal({ navigate }) {
  const [isInvited, setIsInvited] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const fetchInviteCode = () => {
    // #TODO: 초대코드 로직
  };

  const renderModalContent = () => {
    if (!isInvited) {
      return (
        <>
          <ModalButton onClick={() => setIsInvited(true)}>
            팀 초대코드 입력하기
          </ModalButton>
          <ModalButton onClick={() => navigate('/team/create')}>
            내가 팀 만들기
          </ModalButton>
        </>
      );
    }
    return (
      <>
        <ModalInput
          type='text'
          placeholder='초대코드 입력'
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <ModalButtonBlue onClick={fetchInviteCode}>팀 추가하기</ModalButtonBlue>
      </>
    );
  };

  return <ModalContentWrapper>{renderModalContent()}</ModalContentWrapper>;
}

// Style Content
const Wrapper = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 100%;
`;

// Sport Selection
const SportSelectionSection = styled.section`
  display: inline-flex;
  padding: 1.4375rem 1.8125rem 1.375rem 1.9375rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1875rem;

  width: 100%;

  padding: 5% 10%;

  color: var(--Blue300, #0075ff);
  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.0375rem;

  background: var(--white, #fff);

  box-sizing: border-box;
`;
const SportSelect = styled.select`
  display: flex;
  height: 2.5rem;
  padding: 0.5rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 14.5rem;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  box-sizing: border-box; //select 박스의 크기 방식 지정.

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }

  &:focus {
    //#TODO: 색깔 안변하는 문제
    border: 2px solid var(--Blue300, #0075ff);
  }

  option {
    border: 2px solid var(--Blue300, #0075ff);
  }
  border-radius: 0.375rem;
  border: 2px solid var(--Blue300, #0075ff);
  background: url('assets/chevron-down-5 1.svg') no-repeat 98% 50%/1.5rem auto;

  width: 100%;

  font-size: 16px;
  font-weight: 500;
  color: var(--Blue300, #0075ff);
`;

// Team Selection
// #TODO: 디자이너님께 요거 어케할지 (계속 하이파이브?)
const TeamSelectionSection = styled.section``;
const TeamDiv = styled.div`
  position: relative;

  width: 100%;
  padding-top: 83%; // 너비에 대한 비율로 높이 설정
  background-size: cover; // 배경 이미지가 div를 꽉 채우도록
  background-position: center; // 배경 이미지 중앙 정렬
  background-color: ${(props) =>
    props.$backgroundColor || 'var(--Blue300, #0075ff)'};
  color: ${(props) =>
    props.$backgroundColor === '#86ff91' ? '#0075ff' : '#FFF'};
`;
const TeamName = styled.h1`
  position: absolute;
  top: 10%;
  left: 11.3%;

  font-family: Pretendard;
  font-size: 7.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: -1.4px;

  @media (min-width: 768px) {
    font-size: 59.136px; // 뷰포트 너비가 768px 이상일 때 적용될 글씨 크기
  }
`;
const TeamLogo = styled(CircleLogo)`
  position: absolute;
  top: 43%;
  left: 56%;

  width: 36%;
  padding-top: 36%;
  border-radius: 50%;
  background-color: var(--Blue100, #f4f9ff);
`;
const TeamImage = styled.img`
  position: absolute;
  top: 57%;
  left: 8.6%;

  width: 43%;
  height: 56%;
`;
const AddTeamDiv = styled(TeamDiv)`
  background: var(--Gray200, #d9d9d9);
  padding-top: 70%;
`;
const PlusIcon = styled.img`
  position: absolute;

  // 가운데 오게하기
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  width: 22%;
  height: 32%;
`;
const AddText = styled(TeamName)`
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
`;

export default TeamSelectionPage;
