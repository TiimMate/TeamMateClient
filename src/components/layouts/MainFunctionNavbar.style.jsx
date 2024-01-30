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
  font-size: 12px;

  color: var(--Gray200, #d9d9d9);

  text-decoration: none;

  &.active {
    color: var(--Blue300, #0075ff);
  }
`;
