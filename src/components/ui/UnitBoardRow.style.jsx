import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--Gray100, #f0f0f0);
  padding: 26px 16px;
  width: 100%;
  height: 4.375rem;
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
`;

export const Title = styled.div`
  margin-left: 37px;
  width: 50%;
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150%*/
  letter-spacing: -0.6px;
  overflow: hidden;
`;

export const Date = styled.p`
  margin-left: auto;
  color: var(--Gray300, #636363);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 200% */
  letter-spacing: -0.45px;
`;
