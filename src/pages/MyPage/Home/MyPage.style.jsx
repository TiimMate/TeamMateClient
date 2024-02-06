import styled from 'styled-components';
import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 0 9%;
`;

export const H2 = styled.h2`
  position: absolute;
  top: 1.13rem;
  left: 9.44%;

  color: var(--Blue300, #0075ff);

  /* 20 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; /* 160% */
  letter-spacing: -0.0625rem;
`;

export const IntroContainer = styled.div`
  padding: 1.25rem 10%;
`;

export const Introduction = styled.h4`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
`;

export const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0.625rem;

  gap: 0.625rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Gray100, #f0f0f0);
  background: #fff;

  box-sizing: border-box;

  color: var(--Black, var(--kakao-logo, #000));
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
  letter-spacing: -0.04375rem;
`;

export const SaveButton = styled(Button300)``;
