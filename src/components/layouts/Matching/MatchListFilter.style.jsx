import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 42px;
`;

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
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 53px;
  height: 24px;
  margin: 0px 5px;
  padding: 0px 10px;

  background: #fff;
  border-radius: 6px;
  border: 1px solid #d9d9d9;

  color: #636363;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;

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
  color: #636363;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;
