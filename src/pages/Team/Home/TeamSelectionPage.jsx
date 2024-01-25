import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal, {
  ModalButton,
  ModalInput,
  ModalContentWrapper,
} from '../../../components/ui/Modal/Modal';
import * as S from './TeamSelectionPage.style';

import highfive from '../../../assets/highfive.png';
import plus from '../../../assets/plus.svg';

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
      return (
        <Team
          last={index === teamInfos.length - 1} // last이면 그림 X
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

  //
  useEffect(() => {
    if (sport === '2') {
      setTeamInfos(TEAMS_INFOS); // #TODO: Fetch Team infos
    } else setTeamInfos(TEAM_INFOS);
  }, [sport]);

  return (
    <S.Wrapper>
      {isModalOpen && (
        <Modal title='우리 팀 추가하기' onClose={onCloseModal}>
          <TeamAdditionModal navigate={navigate} />
        </Modal>
      )}

      <S.SportSelectionSection>
        종목 선택
        <br />
        <S.SportSelect value={sport} onChange={e => setSport(e.target.value)}>
          {SPORT_OPTIONS.map(option => (
            <option value={option.id} key={option.id}>
              {option.sport}
            </option>
          ))}
        </S.SportSelect>
      </S.SportSelectionSection>

      <S.TeamSelectionSection>
        {renderTeam()}
        <AddTeam onClick={onClickAddTeam} />
      </S.TeamSelectionSection>
    </S.Wrapper>
  );
}

function Team({ last, backgroundColor, onClick, teamInfo }) {
  const { name, logoUrl } = teamInfo;
  return (
    <S.TeamDiv onClick={onClick} $backgroundColor={backgroundColor}>
      <S.TeamName>{name}</S.TeamName>
      <S.TeamLogo logoUrl={logoUrl} />
      {last || <S.TeamImage src={highfive} alt='img' />}
    </S.TeamDiv>
  );
}

function AddTeam({ onClick }) {
  return (
    <S.AddTeamDiv onClick={onClick} backgroundColor='var(--Gray200, #D9D9D9)'>
      <S.PlusIcon src={plus} alt='plus' />
      <S.AddText>팀 추가하기</S.AddText>
    </S.AddTeamDiv>
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
          onChange={e => setInviteCode(e.target.value)}
        />
        <S.ConfirmBtn onClick={fetchInviteCode}>팀 추가하기</S.ConfirmBtn>
      </>
    );
  };

  return <ModalContentWrapper>{renderModalContent()}</ModalContentWrapper>;
}

export default TeamSelectionPage;
