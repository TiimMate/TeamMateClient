import { useNavigate, useParams } from 'react-router-dom';

import {
  formatMemberData,
  MEMBER_RAW_DATA_BASKETBALL,
} from '../../../utils/formatData';
import UnitInfoRow from '../../../components/ui/UnitInfoRow/UnitInfoRow';
import * as S from './TeamDetailPage.style';

const TEAM_INFO = {
  name: '어쩌구FC',
  skill: 78,
  manner: 89,
  description:
    '안녕하세요. 저희는 서초구의 상문고등학교에서 매주 일요일에 경기를 진행하는 어쩌구FC라고 합니다.',
};

function TeamDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <S.Gap />

      <S.TeamMembersSection>{renderMember()}</S.TeamMembersSection>
      <S.GapWithSaveButton>
        <S.SaveButton
          onClick={() => {
            navigate(`/team/${id}/update`);
          }}
        >
          수정하기
        </S.SaveButton>
      </S.GapWithSaveButton>
    </S.Wrapper>
  );
}

export default TeamDetailPage;
