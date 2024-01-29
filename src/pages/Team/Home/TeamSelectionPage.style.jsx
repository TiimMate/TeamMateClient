import styled from 'styled-components';

import { ModalButtonBlue } from '../../../components/ui/Modal/Modal';
import CircleLogo from '../../../components/atoms/CircleLogo';

// Style Content
export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  box-sizing: border-box;
`;

// Sport Selection
export const SportSelectionSection = styled.section`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 5% 10%;
  gap: 0.1875rem;

  background: var(--white, #fff);

  color: var(--Blue300, #0075ff);
  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.0375rem;

  box-sizing: border-box;
`;
export const SportSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0.625rem;
  gap: 14.5rem;
  border-radius: 0.375rem;
  border: 2px solid var(--Blue300, #0075ff);

  background: url('/assets/chevron-down-5 1.svg') no-repeat 98% 50%/1.5rem auto;

  color: var(--Blue300, #0075ff);
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  select::-ms-expand {
    display: none; /*for IE10,11*/
  }

  &:focus {
    //#TODO: 색깔 안변하는 문제
    border: 2px solid var(--Blue300, #0075ff);
  }

  option {
    border: 2px solid var(--Blue300, #0075ff);
  }
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

// for modal styling
export const ConfirmBtn = styled(ModalButtonBlue)`
  justify-content: center;
`;
