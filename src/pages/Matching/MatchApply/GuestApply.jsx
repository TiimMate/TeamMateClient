import React from 'react';
import styled from 'styled-components';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchList from '../../../components/layouts/Matching/MatchList';
import MatchListFilter from '../../../components/layouts/Matching/MatchListFilter';
import MatchWrite from '../../../components/layouts/Matching/MatchWrite';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/layouts/Banner';

export default function GuestApply() {
  const navigate = useNavigate();

  return (
    <Main>
      <MainFunctionNavbar />
      <Banner />
      <WeeklyCalendar />
      <Space />
      <MatchListFilter />
      <MatchWrite
        onClick={() => {
          navigate('/matching/guesthost');
        }}
      />
      <MatchList />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
`;

const Space = styled.div`
  height: 30px;

  background: var(--Gray100, #f0f0f0);
`;
