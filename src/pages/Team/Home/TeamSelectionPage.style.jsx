import styled from 'styled-components';

import CircleLogo from '../../../components/atoms/CircleLogo';

// Style Content
export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  box-sizing: border-box;
`;

// Team Selection
export const TeamSelectionSection = styled.section``;
export const TeamDiv = styled.div`
  position: relative;

  width: 100%;
  padding-top: 83%;

  background-size: cover;
  background-position: center;
  background-color: ${(props) =>
    props.$backgroundColor || 'var(--Blue300, #0075ff)'};
  color: ${(props) =>
    props.$backgroundColor === '#86ff91' ? '#0075ff' : '#FFF'};
`;
export const TeamName = styled.h1`
  position: absolute;
  top: 10%;
  left: 11.3%;

  font-family: Pretendard;
  font-size: 7.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: -1.4px;

  @media (min-width: 768px) {
    font-size: 59.136px;
  }
`;
export const TeamLogo = styled(CircleLogo)`
  position: absolute;
  top: 43%;
  left: 56%;

  width: 36%;
  padding-top: 36%;
  border-radius: 50%;

  background-color: var(--Blue100, #f4f9ff);
`;
export const TeamImage = styled.img`
  position: absolute;
  top: 57%;
  left: 8.6%;

  width: 43%;
  height: 56%;
`;
export const AddTeamDiv = styled(TeamDiv)`
  padding-top: 70%;

  background: var(--Gray200, #d9d9d9);
`;
export const PlusIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  width: 22%;
  height: 32%;
`;
export const AddText = styled(TeamName)`
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
`;
