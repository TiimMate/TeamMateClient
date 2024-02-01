import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--Gray200, #d9d9d9);
`;

export const Wrapper = styled.nav`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const Button = styled.div`
  text-align: center;
  float: left;
  width: 18%;
  height: 20px;
`;

export const NavStyle = styled(NavLink)`
  font-size: 12px;

  color: var(--Gray200, #d9d9d9);

  text-decoration: none;

  &.active {
    color: var(--Blue300, #0075ff);
  }
`;
