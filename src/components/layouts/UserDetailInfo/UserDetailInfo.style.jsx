import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 2.19rem 4.44%;
`;

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
