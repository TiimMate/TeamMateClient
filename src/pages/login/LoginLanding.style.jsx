import styled from 'styled-components';

export const welcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 75px;
`;

export const welcomeMsg = styled.div`
  width: 188px;
  height: 64px;
  color: var(--blue-500);
  font-family: 'Pretendard Variable';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  margin-left: 23px;
`;

export const welcomeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const welcomeImg = styled.img`
  width: 215px;
  height: 237px;
  margin: 146px 0;
  display: flex;
  justify-self: center;
`;
