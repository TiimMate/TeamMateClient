import React from 'react';
import styled from 'styled-components';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchList from '../../../components/layouts/Matching/MatchList';
import MatchListFilter from '../../../components/layouts/Matching/MatchListFilter';
import MatchWrite from '../../../components/layouts/Matching/MatchWrite';

export default function GuestApply() {
  return (
    <Main>
      <MainFunctionNavbar />
      <WeeklyCalendar />
      <Space />
      <MatchListFilter />
      <MatchWrite />
      <MatchList />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;

const Space = styled.div`
  height: 30px;

  background: var(--gray-100, #f0f0f0);
`;
