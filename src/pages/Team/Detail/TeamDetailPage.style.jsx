import styled from 'styled-components';

import Banner from '../../../components/ui/Banner';
import CircleLogo from '../../../components/atoms/CircleLogo';
import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  width: 100%;

  box-sizing: border-box;
`;
export const Gap = styled.div`
  width: 100%;
  height: 1.25rem;

  background-color: var(--Blue100, #f0f0f0);
`;

export const TeamBanner = styled(Banner)``;
export const TeamLogo = styled(CircleLogo)`
  position: absolute;
  top: 100%;
  left: 77.8%;
  transform: translateX(-50%) translateY(-50%);

  width: 100px;
  height: 100px;

  background-color: var(--Blue200, #bddbff);
`;

export const TeamNameSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 1.5rem 8.33%;
`;
export const TeamName = styled.h2`
  margin-bottom: 0.94rem;

  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: -1.4px;
`;

export const statusDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  margin-bottom: 1.63rem;
`;
export const levelDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const levelSpan = styled.span`
  margin-right: 0.38rem;

  color: var(--kakao-logo, #000);
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;
`;
export const levelGauge = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-right: 1.19rem;
  padding: 0 6px;
  gap: 10px;
  border-radius: 3px;

  background: var(--Blue200, #bddbff);
  color: var(--Blue300, #0075ff);
  font-family: 'Pretendard Variable';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 222.222% */
  letter-spacing: -0.45px;
`;
export const description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 94.5%;
  height: 3.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  gap: 10px;
  border-radius: 6px;

  background: var(--Gray100, #f0f0f0);

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

export const GapWithSaveButton = styled(Gap)`
  position: relative;

  height: 7.19rem;
`;
export const SaveButton = styled(Button300)`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  width: 80%;

  color: #fff;

  font-family: Apple SD Gothic Neo;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.40625rem */

  white-space: nowrap;
`;
