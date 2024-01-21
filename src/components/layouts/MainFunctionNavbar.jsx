import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function MainFunctionNavbar() {
  return (
    <Main>
      <Wrapper>
        <Button>
          <NavStyle to='/matching/guestapply'>게스트</NavStyle>
        </Button>
        <Button>
          <NavStyle to='/matching/teamapply'>연습경기</NavStyle>
        </Button>
        <Button>
          <NavStyle to='/location'>대관정보</NavStyle>
        </Button>
        <Button>
          <NavStyle to='/community'>커뮤니티</NavStyle>
        </Button>
      </Wrapper>

      <Banner />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;

const Wrapper = styled.nav`
  overflow: hidden;
  background: var(--White, #fff);
`;

const Button = styled.div`
  text-align: center;
  float: left;
  width: 18%;
  height: 50px;
  line-height: 50px;
`;

const NavStyle = styled(NavLink)`
  color: white;
  font-size: 12px;
  color: var(--Gray200, #d9d9d9);
  text-decoration: none;
  &.active {
    color: var(--Blue300, #0075ff);
  }
`;

const Banner = styled.div`
  background: var(--Blue400, #2e69ff);
  height: 160px;
`;
