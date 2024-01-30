import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const ContentBodyContainer = styled.div`
  display: flex;
  padding: 0.625rem 1.875rem 3rem 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-bottom: 0.0625rem solid var(--Gray200, #d9d9d9);
  background: #fff;
`;

export const ContentImage = styled.img`
  z-index: 1;
`;
export const Arrow = styled.img`
  width: 10px;
  height: 20px;
  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--white, #fff);
  filter: drop-shadow(2px 6px 20px rgba(0, 0, 0, 0.7));

  z-index: 2;
`;

export const Index = styled.img`
  display: flex;
  padding: 0px 6px;
  align-items: center;
  gap: 7px;
  border-radius: 3px;
  opacity: 0.6;
  background: var(--white, #fff);

  z-index: 2;
`;

export const IndexIcon = styled.img`
  width: 24px;
  height: 24px;

  z-index: 3;
`;
export const IndexNum = styled.div`
  color: var(--Black, var(--kakao-logo, #000));
  margin-left: 7px;
  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;

  z-index: 3;
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
