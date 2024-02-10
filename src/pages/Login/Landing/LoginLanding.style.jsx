import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 75px 24px 30px 24px;
`;

export const welcomeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const welcomeMsg = styled.div`
  width: 158px;
  height: 64px;
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  margin-right: auto;
`;

export const welcomeImg = styled.img`
  width: 13.4375rem;
  height: 14.8125rem;
  margin: 9.1875rem 0 9.5rem 0;
  justify-self: center;
`;
