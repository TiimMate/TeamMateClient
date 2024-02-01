import styled from 'styled-components';
import CircleLogo from '../../atoms/CircleLogo';

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
