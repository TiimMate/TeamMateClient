import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  background: var(--Gray100, #f0f0f0);
`;

export const Gap = styled.div`
  box-sizing: border-box;
  background: var(--Gray100, #f0f0f0);
  height: 60px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 161.111% */
  letter-spacing: -0.9px;
  padding: 21px 0 10px 31px;
`;

export const GapText = styled.p``;

export const TeamInfo = styled.div`
  background: white;
`;

export const TeamName = styled.p`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: -1.4px;
`;
export const LevelContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LevelLabel = styled.p`
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;
`;

export const LevelValue = styled.div`
  display: inline-flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
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

export const TeamExplainContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
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

export const TeamExplain = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
`;
export const MatchInfo = styled.div`
  background: white;
`;

export const MatchInfoText = styled.p`
  color: var(--kakao-logo, #000);

  /* 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
  letter-spacing: -0.7px;
`;

export const MemberList = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const RequestPoint = styled.div`
  background: white;
  padding: 10px;
`;

export const P = styled.p`
  color: var(--Gray300, #636363);
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;
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
export const ApplyButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 140px;
`;

export const ApplyButton = styled.button`
  margin-top: 68px;
  display: flex;
  width: 300px;
  height: 45px;
  padding: 11px 115px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #0075ff;
`;
