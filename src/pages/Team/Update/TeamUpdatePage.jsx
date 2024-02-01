import { useState } from 'react';

import LogoUploader from '../../../components/ui/LogoUploader/LogoUploader';
import TeamGenderSelector from '../../../components/layouts/Selector/Gender/TeamGenderSelector';
import TeamAgeSelector from '../../../components/layouts/Selector/Age/TeamAgeSelector';
import LocationSelector from '../../../components/layouts/Selector/Location/LocationSelector';
import GymSelector from '../../../components/layouts/Selector/Gym/GymSelector';
import Gap from '../../../components/atoms/Gap';

import renderMembers from '../../../utils/renderMembers';
import {
  MEMBER_RAW_DATA_BASKETBALL,
  formatMemberData,
} from '../../../utils/formatData';

import * as S from './TeamUpdatePage.style';

function TeamUpdatePage() {
  const [logoUrl, setLogoUrl] = useState('');
  const [selectedGender, setSelectedGender] = useState(
    new Array(3).fill(false),
  );
  const [selectedAge, setSelectedAge] = useState(new Array(5).fill(false));

  const [members, setMembers] = useState(
    formatMemberData(MEMBER_RAW_DATA_BASKETBALL, {
      // options
      formatBtnText: ({ isLeader }) =>
        isLeader === 'true' ? '팀장' : '삭제하기',

      // 리더가 아니라면 id에 따라 버튼을 눌렀을 때 삭제하는 함수를 return
      formatOnClickBtn: ({ id, isLeader }) => {
        const onClickBtn =
          isLeader === 'false'
            ? () =>
                setMembers((currentMembers) =>
                  currentMembers.filter((member) => member.id !== id),
                )
            : null;
        return onClickBtn;
      },
    }),
  );

  return (
    <S.Wrapper>
      <LogoUploader url={logoUrl} setUrl={setLogoUrl} />
      <Gap />

      <S.TeamNameSection>
        <S.Label>팀 이름*</S.Label>
        <S.NameInput />

        <S.Label>소개</S.Label>
        <S.TextArea spellCheck='false' />
      </S.TeamNameSection>
      <Gap />

      <S.TeamDetailSection>
        <TeamGenderSelector
          selected={selectedGender}
          setSelected={setSelectedGender}
        />

        <TeamAgeSelector selected={selectedAge} setSelected={setSelectedAge} />

        <LocationSelector />

        <GymSelector />
      </S.TeamDetailSection>

      <Gap height='3.81rem'>
        <S.Title>팀원 목록</S.Title>
      </Gap>
      <S.TeamMembersSection>{renderMembers(members)}</S.TeamMembersSection>

      <Gap height='7.19rem'>
        <S.SaveButton>저장하기</S.SaveButton>
      </Gap>
    </S.Wrapper>
  );
}

export default TeamUpdatePage;
