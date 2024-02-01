import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const ContentBodyContainer = styled.div`
  display: flex;
  padding: 0.625rem 1.875rem 3rem 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.625rem;

  border-bottom: 0.0625rem solid var(--Gray200, #d9d9d9);
  background: #fff;
`;

export const Contents = styled.div`
  color: var(--kakao-logo, #000);

  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;
