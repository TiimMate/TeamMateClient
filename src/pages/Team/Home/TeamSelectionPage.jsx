import { useState } from 'react';

import useModal from '../../../hooks/useModal';

import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import TeamAddModal from '../components/TeamAddModal/TeamAddModal';

import highfive from '../../../assets/highfive.png';
import plus from '../../../assets/plus.svg';

import * as S from './TeamSelectionPage.style';

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
const COLOR_LIST = ['var(--blue-400, #0075ff)', '#86ff91'];

function TeamSelectionPage() {
  const [sport, setSport] = useState('2');
  const { isOpen, openModal, closeModal } = useModal();

  const teamInfo = sport === '2' ? TEAM_INFOS : TEAMS_INFOS;

  const renderTeam = () =>
    teamInfo.map(({ id, name, logoUrl }, index) => {
      const backgroundColor = COLOR_LIST[index % COLOR_LIST.length]; // 번갈아 가면서 color 선택
      const isLast = index === teamInfo.length - 1;

      return (
        <S.TeamLink
          key={id}
          to={`/team/${id}`}
          $backgroundColor={backgroundColor}
        >
          <S.TeamName>{name}</S.TeamName>
          <S.TeamLogo logoUrl={logoUrl} />
          {isLast || <S.TeamImage src={highfive} alt='img' />}
        </S.TeamLink>
      );
    });

  return (
    <S.Wrapper>
      {isOpen && <TeamAddModal onClose={closeModal} />}

      <SportSelector sport={sport} setSport={setSport} />

      <S.TeamSelectionSection>
        {renderTeam()}

        <S.AddTeamDiv onClick={openModal}>
          <S.PlusIcon src={plus} alt='plus' />
          <S.AddText>팀 추가하기</S.AddText>
        </S.AddTeamDiv>
      </S.TeamSelectionSection>
    </S.Wrapper>
  );
}

export default TeamSelectionPage;
