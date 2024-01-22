import { useState } from 'react';

import UnitInfoRow from '../../../components/ui/UnitInfoRow/UnitInfoRow';
import {
  MEMBER_RAW_DATA_BASKETBALL,
  formatMemberData,
} from '../../../utils/formatData';
import * as S from './TeamUpdatePage.style';

function TeamUpdatePage() {
  const [teamLogoUrl, setTeamLogoUrl] = useState('');
  const [selectedGender, setSelectedGender] = useState(
    new Array(3).fill(false),
  );
  const [selectedAge, setSelectedAge] = useState(new Array(5).fill(false));
  const toggleSpot = (index, setter) => {
    setter(spots => {
      const newSpots = new Array(spots.length).fill(false); // 배열 복사
      newSpots[index] = !spots[index]; // 특정 인덱스의 값을 토글
      return newSpots; // 업데이트된 배열로 상태 설정
    });
  };

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
                setMembers(currentMembers =>
                  currentMembers.filter(member => member.id !== id),
                )
            : null;
        return onClickBtn;
      },
    }),
  );

  // #TODO: API 나오면  그 이름대로 input logic 구현하기
  const renderMember = () =>
    members.map(member => (
      <UnitInfoRow
        key={member.id}
        unitInfo={member.unitInfo}
        btnText={member.btnText}
        onClickBtn={member.onClickBtn}
      />
    ));

  return (
    <S.Wrapper>
      <S.TeamLogoSection>
        <S.TeamLogo $logoUrl={teamLogoUrl}>
          {!teamLogoUrl && '팀 로고'}
        </S.TeamLogo>
        <LogoUploader setLogoUrl={setTeamLogoUrl} />
      </S.TeamLogoSection>
      <S.Gap />

      <S.TeamNameSection>
        <S.Label>팀 이름*</S.Label>
        <S.NameInput />
        <S.Label>소개</S.Label>
        <S.TextArea spellCheck='false' />
      </S.TeamNameSection>
      <S.Gap />

      <S.TeamDetailSection>
        <S.Label>성별*</S.Label>
        <S.Grid3X1>
          <SelectButton
            $selected={selectedGender[0]}
            onClick={() => toggleSpot(0, setSelectedGender)}
          >
            여성
          </SelectButton>
          <SelectButton
            $selected={selectedGender[1]}
            onClick={() => toggleSpot(1, setSelectedGender)}
          >
            남성
          </SelectButton>
          <SelectButton
            $selected={selectedGender[2]}
            onClick={() => toggleSpot(2, setSelectedGender)}
          >
            혼성
          </SelectButton>
        </S.Grid3X1>
        <S.Label>연령대*</S.Label>
        <S.Grid3X2>
          <SelectButton
            $selected={selectedAge[0]}
            onClick={() => toggleSpot(0, setSelectedAge)}
          >
            10대
          </SelectButton>
          <SelectButton
            $selected={selectedAge[1]}
            onClick={() => toggleSpot(1, setSelectedAge)}
          >
            20대
          </SelectButton>
          <SelectButton
            $selected={selectedAge[2]}
            onClick={() => toggleSpot(2, setSelectedAge)}
          >
            30대
          </SelectButton>
          <SelectButton
            $selected={selectedAge[3]}
            onClick={() => toggleSpot(3, setSelectedAge)}
          >
            40대
          </SelectButton>
          <SelectButton
            $selected={selectedAge[4]}
            onClick={() => toggleSpot(4, setSelectedAge)}
          >
            50대 이상
          </SelectButton>
        </S.Grid3X2>
        <S.Label>지역*</S.Label>
        <S.ButtonWithChevron>
          지역을 선택해주세요{' '}
          <img src='/assets/chevron-down-4 1.svg' alt='chevron' />
        </S.ButtonWithChevron>
        <S.Label>체육관명*</S.Label>
        <S.ButtonWithChevron>
          체육관을 검색해보세요{' '}
          <img src='/assets/chevron-down-4 1.svg' alt='chevron' />
        </S.ButtonWithChevron>
      </S.TeamDetailSection>

      <S.GapWithTeamMemeberTitle>
        <S.TeamMemberTitle>팀원 목록</S.TeamMemberTitle>
      </S.GapWithTeamMemeberTitle>
      <S.TeamMembersSection>{renderMember()}</S.TeamMembersSection>

      <S.GapWithSaveButton>
        <S.SaveButton>저장하기</S.SaveButton>
      </S.GapWithSaveButton>
    </S.Wrapper>
  );
}

function LogoUploader({ setLogoUrl }) {
  const handleFileChange = event => {
    const file = event.target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = e => {
        setLogoUrl(e.target.result);
      };
      reader.readAsDataURL(file); // Image Upload
    }
  };
  return (
    <S.LogoUploadLabel>
      이미지 변경
      <input
        type='file'
        accept='.jpg,.png,.svg' /* jpg, png, svg 파일만 허용 */
        onChange={handleFileChange}
      />
    </S.LogoUploadLabel>
  );
}

function SelectButton({ $selected, onClick, children }) {
  return (
    <S.GridContentWrapper>
      <S.Button onClick={onClick} $selected={$selected}>
        {children}
      </S.Button>
    </S.GridContentWrapper>
  );
}

// 기본적인 component

export default TeamUpdatePage;
