import styled, { css } from 'styled-components';

import Button300 from '../../../components/atoms/Button300';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0rem;
`;

export const Label = styled.label`
  cursor: pointer;
  color: var(--gray-300, #636363);
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  letter-spacing: -0.0375rem;
  background-color: transparent;
  border: none;
  margin-bottom: 0.31rem;
`;

export const Input = styled.input`
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--gray-200, #d9d9d9);
  background: var(--gray-100, #f0f0f0);

  border-radius: 0.375rem;
  border: 1px solid var(--gray-200, #d9d9d9);
  background: var(--gray-100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  font-family: Pretendard Variable;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.04375rem;
`;

export const TeamLogoSection = styled.section``;

export const TeamNameSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-items: start;

  padding: 1.5rem 5%;
`;

export const NameInput = styled(Input)`
  width: calc(100% - 1.5rem);
  margin-bottom: 1.25rem;
`;
export const TextArea = styled.textarea`
  width: calc(100% - 1.5rem);
  padding: 0.625rem 0.75rem;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-200, #d9d9d9);

  background: var(--gray-100, #f0f0f0);

  color: var(--Black, var(--kakao-logo, #000));
  /* 12pt */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.0375rem;
`;

export const TeamDetailSection = styled(TeamNameSection)`
  ${Label} {
    padding-left: 1.5%;
  }
`;

export const TeamMembersSection = styled(TeamLogoSection)`
  ${Wrapper} {
    border-top: none;
  }
`;

export const Title = styled.h3`
  position: absolute;
  top: 1.25rem;
  left: 9.44%;

  color: var(--blue-400, #0075ff);
  /* b20 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 160% */
  letter-spacing: -0.0625rem;
`;

export const SaveButton = styled(Button300)`
  position: absolute;
  width: 80%;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  color: white;

  font-family: Apple SD Gothic Neo;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 1.40625rem */

  white-space: nowrap;
`;

export const Main = styled.div`
  box-sizing: border-box;

  width: 100%;

  background: var(--Gray100, #f0f0f0);
`;

export const Gap = styled.div`
  box-sizing: border-box;

  height: 60px;
  padding: 1.5rem 8.33%;

  background: var(--Gray100, #f0f0f0);

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 161.111% */
  letter-spacing: -0.9px;
`;

export const MatchTimeSection = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  background: white;

  .swiper {
    .swiper-slide {
      width: auto !important;
      margin-right: 15px;
    }
  }
`;

export const GuestHostSection = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem 8.33%;

  background: white;
`;

export const HostCountSection = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 68px;
  margin: 8px 0px 20px 0px;
  border-radius: 6px;
  border: 1px solid var(--Gray100, #f0f0f0);
`;

export const HostCountInput = styled.input`
  width: 14px;
  border: 0cap;
  border-bottom: 1px solid var(--Gray300, #d9d9d9);

  color: var(--Gray200, #d9d9d9);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px; /* 140% */
  letter-spacing: -1.5px;
`;

export const HostCountP = styled.p`
  width: 26px;

  color: var(--Gray300, #636363);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -1.5px;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;
export const HostButton = styled.button`
  box-sizing: border-box;

  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
  width: 300px;
  height: 45px;
  padding: 11px 115px;
  margin: 29px 1rem 20px 1rem;
  border-radius: 6px;

  background: #0075ff;

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 22.5px */

  flex-shrink: 0;
`;

//드롭다운
export const Menu = styled.div`
  position: absolute;
  left: 50%;

  width: 74px;
  border-radius: 3px;

  background: white;

  text-align: center;

  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    visibility 0.4s;
  z-index: 9;

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 10px;
  padding: 0 0 20px 0;
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 24px;
  margin: 0px 5px;
  padding: 0px 10px;

  background: #fff;
  border-radius: 6px;
  border: 1px solid black;

  color: var(--Neutral-Black, #061119);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.048px;

  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;

  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
`;

export const Li = styled.li`
  cursor: pointer;
`;

export const P = styled.p`
  margin: 10px;
  color: var(--Neutral-Black, #061119);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.048px;
`;
