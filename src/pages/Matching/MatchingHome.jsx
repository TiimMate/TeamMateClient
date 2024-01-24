import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainFunctionNavbar from '../../components/layouts/MainFunctionNavbar';
// import GuestApply from './MatchApply/GuestApply';
// import TeamApply from './MatchApply/TeamApply';
import WeeklyCalendar from '../../components/layouts/WeeklyCalendar';

export default function MatchingHome() {
  // const state = 'guestapply';
  return (
    <Main>
      <MainFunctionNavbar />
      <WeeklyCalendar />
      {/* {{ guestapply: <GuestApply />, teamapply: <TeamApply /> }[state]} */}
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;
