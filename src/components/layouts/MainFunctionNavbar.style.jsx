import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
`;

export const Wrapper = styled.nav`
  overflow: hidden;

  background: var(--White, #fff);
`;

export const Button = styled.div`
  text-align: center;
  float: left;

  width: 18%;
  height: 50px;

  line-height: 50px;
`;

export const NavStyle = styled(NavLink)`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */

  color: var(--Gray200, #d9d9d9);

  text-decoration: none;

  &.active {
    color: var(--Blue300, #0075ff);
  }
`;

export const Banner = styled.div`
  height: 160px;

  background: var(--Blue400, #2e69ff);
`;
