import styled from 'styled-components';

export const InfoRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  margin-bottom: 0.62rem;
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
`;
export const Span = styled.span`
  color: var(--kakao-logo, #000);

  /* 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
  letter-spacing: -0.7px;
`;

export const Comment = styled.h4`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -1.2px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 7rem;
`;
