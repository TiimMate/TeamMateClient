import { useNavigate } from 'react-router-dom';

import {
  formatMemberData,
  MEMBER_RAW_DATA_BASKETBALL,
} from '../../../utils/formatData';
import UnitInfoRow from '../../../components/ui/UnitInfoRow/UnitInfoRow';
import Level from '../../../components/ui/Level/Level';
import Gap from '../components/Gap';

import * as S from './TeamDetailPage.style';

const TEAM_INFO = {
  name: '어쩌구FC',
  skill: 78,
  manner: 89,
  description:
    '안녕하세요. 저희는 서초구의 상문고등학교에서 매주 일요일에 경기를 진행하는 어쩌구FC라고 합니다.',
};

function TeamDetailPage() {
  const navigate = useNavigate();

  //#TODO
  const renderMember = () =>
    formatMemberData(MEMBER_RAW_DATA_BASKETBALL).map((member) => (
      <UnitInfoRow
        key={member.id}
        unitInfo={member.unitInfo}
        btnText={member.btnText}
        onClickBtn={member.onClickBtn}
      />
    ));

  return (
    <S.Wrapper>
      <S.TeamBanner>
        <S.TeamLogo />
      </S.TeamBanner>

      <S.TeamNameSection>
        <S.TeamName>{TEAM_INFO.name}</S.TeamName>
        <Level />
        <S.description>{TEAM_INFO.description}</S.description>
      </S.TeamNameSection>
      <Gap />

      <S.TeamMembersSection>{renderMember()}</S.TeamMembersSection>

      <Gap height='7.19rem'>
        <S.SaveButton onClick={() => navigate('/team/update')}>
          수정하기
        </S.SaveButton>
      </Gap>
    </S.Wrapper>
  );
}

export default TeamDetailPage;
