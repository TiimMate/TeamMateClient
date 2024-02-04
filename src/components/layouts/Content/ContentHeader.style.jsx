import styled from 'styled-components';

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 9px 30px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid var(--Gray200, #d9d9d9);
`;

export const Title = styled.h3`
  /* 14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 178.571% */
  letter-spacing: -0.0437rem;
  color: var(--kakao-logo, #000);
`;

export const IconButton = styled.button`
  display: flex;
  margin-left: auto;
  padding: 5px;
  align-items: center;
  gap: 10px;
`;

export const IconGuide = styled.div`
  width: 52px;
  color: var(--Gray300, #636363);

  /* 12pt */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.6px;
`;
