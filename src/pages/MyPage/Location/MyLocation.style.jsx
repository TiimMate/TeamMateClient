import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const WhiteSpan = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 1.31rem;
  color: var(--white, #fff);
  font-family: 'Pretendard Variable';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  letter-spacing: -1.2px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid var(--Gray100, #f0f0f0);
  padding: 9px 26px 9px 16px;
`;

export const Category = styled.div`
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title = styled.div`
  margin-left: 37px;
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Date = styled.div`
  margin-left: auto;
  margin-right: 7%;
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
