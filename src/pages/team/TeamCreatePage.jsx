import styled from 'styled-components';
import { useState } from 'react';

import CircleLogo from '../../components/atoms/CircleLogo';
import UnitInfoRow from '../../components/ui/UnitInfoRow';

import Button300 from '../../components/atoms/Button300';

const dummy = [
  {
    id: 1,
    unitInfo: {
      title: '타이틀 1',
      description: '이것은 더미 데이터입니다.',
      date: '1월 17일',
      avatarUrl: '/assets/highfive.png',
    },
    btnText: '삭제하기',
    onClickBtn: null,
  },
  {
    id: 2,
    unitInfo: {
      title: '타이틀 2',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 없음',
    onClickBtn: () => {},
  },
  {
    id: 3,
    unitInfo: {
      title: '타이틀 3',
      description: '스타일링 연습 중입니다.',
      date: '2월 1일',
    },
    btnText: '작게',
    onClickBtn: null,
  },
  {
    id: 4,
    unitInfo: {
      title: '타이틀 4',
      description: '더미 데이터 예제입니다.',
    },
    onClickBtn: () => {},
  },
  {
    id: 5,
    unitInfo: {
      title: '타이틀 5',
      description: '더미 데이터 예제입니다.',
      date: '3월 12일',
    },
  },
  {
    id: 6,
    unitInfo: {
      title: '타이틀 6',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 좀 더 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 7,
    unitInfo: {
      title: '타이틀 7',
      description: '더미 데이터 예제입니다.',
      date: '4월 7일',
    },
    btnText: '버튼 텍스트가 긴 경우',
    onClickBtn: null,
  },
  {
    id: 8,
    unitInfo: {
      title: '타이틀 8',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '버튼 길이가 아주 아주 아주 긴 경우',
    onClickBtn: () => {},
  },
  {
    id: 9,
    unitInfo: {
      title: '타이틀 9',
      description: '더미 데이터 예제입니다.',
      date: '5월 20일',
    },
    btnText: '버튼 길이가 길면 어떨까요?',
    onClickBtn: null,
  },
  {
    id: 10,
    unitInfo: {
      title: '타이틀 10',
      description: '더미 데이터 예제입니다.',
    },
    btnText: '팀장',
    onClickBtn: () => {},
  },
];

function TeamCreatePage() {
  const [teamLogoUrl, setTeamLogoUrl] = useState('');
  const [selectedGender, setSelectedGender] = useState(
    new Array(3).fill(false),
  );
  const [selectedAge, setSelectedAge] = useState(new Array(5).fill(false));
  const toggleSpot = (index, setter) => {
    setter((spots) => {
      const newSpots = new Array(spots.length).fill(false); // 배열 복사
      newSpots[index] = !spots[index]; // 특정 인덱스의 값을 토글
      return newSpots; // 업데이트된 배열로 상태 설정
    });
  };
  // #TODO: API 나오면  그 이름대로 input logic 구현하기

  const renderMember = () =>
    dummy.map((member) => (
      <UnitInfoRow
        key={member.id}
        unitInfo={member.unitInfo}
        btnText={member.btnText}
        onClickBtn={member.onClickBtn}
      />
    ));

  return (
    <Wrapper>
      <TeamLogoSection>
        <TeamLogo $logoUrl={teamLogoUrl}>{!teamLogoUrl && '팀 로고'}</TeamLogo>
        <LogoUploader setLogoUrl={setTeamLogoUrl} />
      </TeamLogoSection>
      <Gap />

      <TeamNameSection>
        <Label>팀 이름*</Label>
        <NameInput />
        <Label>소개</Label>
        <TextArea spellCheck='false' />
      </TeamNameSection>
      <Gap />

      <TeamDetailSection>
        <Label>성별*</Label>
        <Grid3X1>
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
        </Grid3X1>
        <Label>연령대*</Label>
        <Grid3X2>
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
        </Grid3X2>
        <Label>지역*</Label>
        <ButtonWithChevron>
          지역을 선택해주세요{' '}
          <img src='/assets/chevron-down-4 1.svg' alt='chevron' />
        </ButtonWithChevron>
        <Label>체육관명*</Label>
        <ButtonWithChevron>
          체육관을 검색해보세요{' '}
          <img src='/assets/chevron-down-4 1.svg' alt='chevron' />
        </ButtonWithChevron>
      </TeamDetailSection>

      <GapWithTeamMemeberTitle>
        <TeamMemberTitle>팀원 목록</TeamMemberTitle>
      </GapWithTeamMemeberTitle>
      <TeamMembersSection>{renderMember()}</TeamMembersSection>

      <GapWithSaveButton>
        <SaveButton>저장하기</SaveButton>
      </GapWithSaveButton>
    </Wrapper>
  );
}

// #TODO: image uploader 조금 더 좋게 업그레이드 (되면?)
// #TODO: 이미지 초기화 버튼 넣을까요?
function LogoUploader({ setLogoUrl }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoUrl(e.target.result);
      };
      reader.readAsDataURL(file); // Image Upload
    }
  };
  return (
    <LogoUploadLabel>
      이미지 변경
      <input
        type='file'
        accept='.jpg,.png,.svg' /* jpg, png, svg 파일만 허용 */
        onChange={handleFileChange}
      />
    </LogoUploadLabel>
  );
}

function SelectButton({ $selected, onClick, children }) {
  return (
    <GridContentWrapper>
      <Button onClick={onClick} $selected={$selected}>
        {children}
      </Button>
    </GridContentWrapper>
  );
}

// 기본적인 component
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0rem;
`;
const Gap = styled.div`
  width: 100%;
  height: 1.25rem;
  background-color: var(--Blue100, #f0f0f0);
`;
const Label = styled.label`
  cursor: pointer;
  color: var(--Gray300, #636363);
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
  background-color: transparent;
  border: none;
  margin-bottom: 0.31rem;
`;
const Input = styled.input`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: var(--Gray100, #f0f0f0);

  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: var(--Gray100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  font-family: Pretendard Variable;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.04375rem;
`;
const Button = styled.button`
  display: flex;

  width: 100%;
  height: 100%;

  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: #fff;
  cursor: pointer;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.125rem */
  letter-spacing: -0.0375rem;

  ${(props) =>
    props.$selected &&
    `
    color:  #0075ff;
    border: 1px solid #0075ff;
  `}
`;

// Logo section
const TeamLogoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
`;
const TeamLogo = styled(CircleLogo)`
  width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: var(--kakao-logo, #000);

  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.25rem; /* 257.143% */
  letter-spacing: -0.04375rem;

  margin-bottom: 1.25rem;
`;
const LogoUploadLabel = styled(Label)`
  input[type='file'] {
    display: none; /* 실제 파일 입력 필드 숨김 */
  }
`;

// 이름, 소개
const TeamNameSection = styled(TeamLogoSection)`
  align-items: start;
  padding: 1.5rem 5%;
`;
const NameInput = styled(Input)`
  width: calc(100% - 1.5rem);
  margin-bottom: 1.25rem;
`;
const TextArea = styled.textarea`
  width: calc(100% - 1.5rem);
  padding: 0.625rem 0.75rem;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: var(--Gray100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;

// 세부 사항
const TeamDetailSection = styled(TeamNameSection)`
  ${Label} {
    padding-left: 1.5%;
  }
`;
const Grid3X1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열, 각 열은 같은 크기 */
  grid-template-rows: 3.25rem; /* 한 개의 행, 높이는 2.5rem */
  width: 100%;
  margin-bottom: 1.25rem;
`;
const Grid3X2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열, 각 열은 같은 크기 */
  grid-template-rows: repeat(2, 2.875rem);
  width: 100%;
  margin-bottom: 1.25rem;
`;
const GridContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 5%; /* 원하는 만큼의 패딩 설정 */
`;

const ButtonWithChevron = styled(Button)`
  margin-left: 1%;
  margin-bottom: 1.25rem;
  width: 98%;
  padding: 0.625rem;
`;

// 팀원 목록
const TeamMembersSection = styled(TeamLogoSection)`
  ${Wrapper} {
    border-top: none;
  }
`;
const GapWithTeamMemeberTitle = styled(Gap)`
  position: relative;
  height: 3.81rem;
`;
const TeamMemberTitle = styled.h3`
  position: absolute;
  top: 1.25rem;
  left: 9.44%;
  color: var(--Blue300, #0075ff);
  /* b20 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 160% */
  letter-spacing: -0.0625rem;
`;

const GapWithSaveButton = styled(Gap)`
  position: relative;
  height: 7.19rem;
`;
const SaveButton = styled(Button300)`
  position: absolute;

  width: 80%;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  color: #fff;

  font-family: Apple SD Gothic Neo;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.40625rem */

  white-space: nowrap;
`;

export default TeamCreatePage;
