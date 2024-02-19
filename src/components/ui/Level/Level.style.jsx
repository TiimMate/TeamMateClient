import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 100%;
  margin: 0.94rem 0;
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
  font-size: 10px;
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
