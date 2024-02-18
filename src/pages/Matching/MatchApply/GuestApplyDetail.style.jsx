import styled from 'styled-components';

export const Main = styled.div`
  box-sizing: border-box;

  width: 100%;
`;

export const Gap = styled.div`
  box-sizing: border-box;

  height: 60px;
  padding: 1.5rem 8.33%;

  background: var(--Gray100, #f0f0f0);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 161.111% */
  letter-spacing: -0.9px;
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

export const MatchInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1.5rem 8.33%;

  background: white;
`;

export const Img = styled.img`
  margin-right: 10px;
`;

export const MatchInfoText = styled.div`
  display: flex;
  align-items: center;

  color: var(--kakao-logo, #000);
  /* 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
  letter-spacing: -0.7px;
`;

export const TeamMembersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px 1.5rem;
`;

export const RequestPoint = styled.div`
  background: white;
  padding: 1.5rem 8.33%;
`;

export const Label = styled.label`
  border: none;
  margin-bottom: 0.31rem;

  background-color: transparent;

  cursor: pointer;
  color: var(--Gray300, #636363);
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
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

export const RequestInput = styled.input`
  box-sizing: border-box;

  padding: 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--Gray200, #d9d9d9);

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

export const ApplyButtonSection = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  flex-direction: column;

  height: 140px;

  background: var(--Gray100, #f0f0f0);
`;

export const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 45px;
  margin-top: 20px;
  border-radius: 6px;

  padding: 11px 115px;

  background: #0075ff;

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */

  flex-shrink: 0;
`;
