import useTeamInfo from '../../../hooks/useTeamInfo';

import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import TeamGenderSelector from '../../../components/ui/Selector/Gender/TeamGenderSelector';
import TeamAgeSelector from '../../../components/ui/Selector/Age/TeamAgeSelector';
import LocationSelector from '../../../components/ui/Selector/Location/LocationSelector';
import GymSelector from '../../../components/ui/Selector/Gym/GymSelector';
import MemberRows from '../../../components/ui/MemberRows/MemberRows';
import Gap from '../../../components/atoms/Gap';

import { formatMemberData } from '../../../utils/formatData';

import * as S from './TeamCreatePage.style';

function TeamUpdatePage() {
  const [teamInfo, dispatch] = useTeamInfo();
  const { logoUrl, name, description, gender, age, location, members } =
    teamInfo;

  const formattedMembers = formatMemberData(members, {
    formatBtnText: ({ isLeader }) =>
      isLeader === 'false' ? '삭제하기' : '팀장',

    formatOnClickBtn: ({ isLeader, id }) =>
      isLeader === 'false' && (() => dispatch({ type: 'MEMBERS', value: id })),
  });

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
        <S.Title>팀원 목록</S.Title>
      </Gap>
      <S.TeamMembersSection>
        <MemberRows members={formattedMembers} />
      </S.TeamMembersSection>

      <Gap height='7.19rem'>
        <S.SaveButton onClick={() => console.log(teamInfo)}>
          저장하기
        </S.SaveButton>
      </Gap>
    </S.Wrapper>
  );
}

export default TeamUpdatePage;
