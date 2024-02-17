import { useEffect, useState } from 'react';

import authInstance from '../../../services/authInstance';

import useModal from '../../../hooks/useModal';
import withAuth from '../../../hooks/hoc/withAuth';

import SportSelector from '../../../components/ui/Selector/Sport/SportSelector';
import TeamAddModal from '../components/TeamAddModal/TeamAddModal';

import highfive from '../../../assets/highfive.png';
import plus from '../../../assets/plus.svg';

import * as S from './TeamSelectionPage.style';

const COLOR_LIST = ['var(--blue-400, #0075ff)', '#86ff91'];

function TeamSelectionPage() {
  const [sport, setSport] = useState('basketball');
  const [teamInfo, setTeamInfo] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await authInstance.get(`/teams?category=${sport}`);
        const { result } = response.data;
        setTeamInfo([...result]);
      } catch (error) {
        console.log(error);
      }
    };
    getTeams();
  }, [sport]);

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
          <S.TeamLogo $logoUrl={logoUrl} />
          {isLast || <S.TeamImage src={highfive} alt='img' />}
        </S.TeamLink>
      );
    });

  return (
    <S.Wrapper>
      {isOpen && <TeamAddModal onClose={closeModal} category={sport} />}

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

export default withAuth(TeamSelectionPage);
