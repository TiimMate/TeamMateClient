import styled from 'styled-components';

import Banner from '../../../components/ui/Banner';
import CircleLogo from '../../../components/atoms/CircleLogo';
import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  width: 100%;

  box-sizing: border-box;
`;

export const TeamBanner = styled(Banner)``;
export const TeamLogo = styled(CircleLogo)`
  position: absolute;
  top: 100%;
  left: 77.8%;
  transform: translateX(-50%) translateY(-50%);

  width: 100px;
  height: 100px;

  background-color: var(--blue-200, #bddbff);
`;

export const TeamNameSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 1.5rem 8.33%;
`;
export const TeamName = styled.h2`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: -1.4px;
`;

export const description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 94.5%;
  height: 3.5rem;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  gap: 10px;
  border-radius: 6px;

  background: var(--gray-100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  /* 12pt */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
`;

export const TeamMembersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
`;

export const SaveButton = styled(Button300)`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  width: 80%;

  color: white;

  font-family: Apple SD Gothic Neo;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.40625rem */

  white-space: nowrap;
`;

export const Title = styled.h4`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 8.33% 0.8125rem 8.33%;

  border-bottom: 1px solid var(--Gray200, #d9d9d9);
  background: #fff;

  color: var(--kakao-logo, #000);

  /* 14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 178.571% */
  letter-spacing: -0.04375rem;

  box-sizing: border-box;
`;

export const TeamCodeSection = styled.section`
  display: flex;
  padding: 1.25rem 0;
  justify-content: center;
  align-items: center;
`;

export const TeamCode = styled.div`
  display: flex;
  width: 83.34%;
  padding: 0.625rem;
  align-items: center;
  align-content: center;
  gap: 0.625rem;
  flex-shrink: 0;
  flex-wrap: wrap;

  border-radius: 0.375rem;
  border: 1px solid var(--Gray200, #d9d9d9);
  background: var(--Gray100, #f0f0f0);

  color: var(--Gray300, #636363);
  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
  text-align: center;
`;
