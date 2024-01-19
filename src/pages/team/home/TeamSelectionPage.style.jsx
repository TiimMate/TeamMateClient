import styled from 'styled-components';
import CircleLogo from '../../../components/atoms/CircleLogo';

// Style Content
export const Wrapper = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 100%;
`;

// Sport Selection
export const SportSelectionSection = styled.section`
  display: inline-flex;
  padding: 1.4375rem 1.8125rem 1.375rem 1.9375rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1875rem;

  width: 100%;

  padding: 5% 10%;

  color: var(--Blue300, #0075ff);
  /* 12md */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 183.333% */
  letter-spacing: -0.0375rem;

  background: var(--white, #fff);

  box-sizing: border-box;
`;
export const SportSelect = styled.select`
  display: flex;
  height: 2.5rem;
  padding: 0.5rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 14.5rem;

  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  box-sizing: border-box; //select 박스의 크기 방식 지정.

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
  border-radius: 0.375rem;
  border: 2px solid var(--Blue300, #0075ff);
  background: url('assets/chevron-down-5 1.svg') no-repeat 98% 50%/1.5rem auto;

  width: 100%;

  font-size: 16px;
  font-weight: 500;
  color: var(--Blue300, #0075ff);
`;

// Team Selection
// #TODO: 디자이너님께 요거 어케할지 (계속 하이파이브?)
export const TeamSelectionSection = styled.section``;
export const TeamDiv = styled.div`
  position: relative;

  width: 100%;
  padding-top: 83%; // 너비에 대한 비율로 높이 설정
  background-size: cover; // 배경 이미지가 div를 꽉 채우도록
  background-position: center; // 배경 이미지 중앙 정렬
  background-color: ${props =>
    props.$backgroundColor || 'var(--Blue300, #0075ff)'};
  color: ${props =>
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
    font-size: 59.136px; // 뷰포트 너비가 768px 이상일 때 적용될 글씨 크기
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
  background: var(--Gray200, #d9d9d9);
  padding-top: 70%;
`;
export const PlusIcon = styled.img`
  position: absolute;

  // 가운데 오게하기
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
