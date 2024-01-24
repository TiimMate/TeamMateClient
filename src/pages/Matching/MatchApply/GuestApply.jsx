import React from 'react';
import styled from 'styled-components';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';

export default function GuestApply() {
  return (
    <Main>
      <MainFunctionNavbar />
      <WeeklyCalendar />
      GuestApply
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;
