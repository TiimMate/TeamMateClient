import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainFunctionNavbar from '../../components/layouts/MainFunctionNavbar';

export default function MatchingHome() {
  return (
    <Main>
      <MainFunctionNavbar />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;
