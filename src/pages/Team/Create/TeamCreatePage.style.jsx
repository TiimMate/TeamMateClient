import styled from 'styled-components';
import CircleLogo from '../../../components/atoms/CircleLogo';
import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0rem;
`;
export const Gap = styled.div`
  width: 100%;
  height: 1.25rem;
  background-color: var(--Blue100, #f0f0f0);
`;
export const Label = styled.label`
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
export const Input = styled.input`
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
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  width: 100%;
  height: 100%;
  padding: 0.25rem;
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
export const TeamLogoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
`;
export const TeamLogo = styled(CircleLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 4.375rem;
  height: 4.375rem;
  margin-bottom: 1.25rem;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;

  line-height: 2.25rem; /* 257.143% */
  letter-spacing: -0.04375rem;
  text-align: center;
  color: var(--kakao-logo, #000);
`;
export const LogoUploadLabel = styled(Label)`
  input[type='file'] {
    display: none;
  }
`;

// 이름, 소개
export const TeamNameSection = styled(TeamLogoSection)`
  align-items: start;

  padding: 1.5rem 5%;
`;
export const NameInput = styled(Input)`
  width: calc(100% - 1.5rem);
  margin-bottom: 1.25rem;
`;
export const TextArea = styled.textarea`
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
export const TeamDetailSection = styled(TeamNameSection)`
  ${Label} {
    padding-left: 1.5%;
  }
`;
export const Grid3X1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3.25rem;

  width: 100%;
  margin-bottom: 1.25rem;
`;
export const Grid3X2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 세 개의 열, 각 열은 같은 크기 */
  grid-template-rows: repeat(2, 2.875rem);

  width: 100%;
  margin-bottom: 1.25rem;
`;
export const GridContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 5%; /* 원하는 만큼의 패딩 설정 */
`;

export const ButtonWithChevron = styled(Button)`
  width: 98%;
  margin-left: 1%;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
`;

// 팀원 목록
export const TeamMembersSection = styled(TeamLogoSection)`
  ${Wrapper} {
    border-top: none;
  }
`;
export const GapWithTeamMemeberTitle = styled(Gap)`
  position: relative;

  height: 3.81rem;
`;
export const TeamMemberTitle = styled.h3`
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

export const GapWithSaveButton = styled(Gap)`
  position: relative;

  height: 7.19rem;
`;
export const SaveButton = styled(Button300)`
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
