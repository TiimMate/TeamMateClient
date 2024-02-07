import React, { useState } from 'react';
import styled from 'styled-components';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchList from '../../../components/layouts/Matching/MatchList';
import MatchListFilter from '../../../components/layouts/Matching/MatchListFilter';
import MatchWrite from '../../../components/layouts/Matching/MatchWrite';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/layouts/Banner';

export default function TeamApply() {
  const navigate = useNavigate();
  const [regionFilter, setRegionFilter] = useState('지역');
  const [levelFilter, setLevelFilter] = useState('레벨');
  const [genderFilter, setGenderFilter] = useState('성별');

  return (
    <Main>
      <MainFunctionNavbar />
      <Banner />
      <WeeklyCalendar />
      <Space />
      <MatchListFilter
        setRegionFilter={setRegionFilter}
        setLevelFilter={setLevelFilter}
        setGenderFilter={setGenderFilter}
      />
      <MatchWrite
        onClick={() => {
          navigate('/matching/guesthost');
        }}
        text='팀 '
      />
      <MatchList />
      {regionFilter}
      {levelFilter}
      {genderFilter}
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
