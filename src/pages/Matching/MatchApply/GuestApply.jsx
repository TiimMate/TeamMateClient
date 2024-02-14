import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchList from '../../../components/layouts/Matching/MatchList';
import MatchListFilter from '../../../components/layouts/Matching/MatchListFilter';
import MatchWrite from '../../../components/layouts/Matching/MatchWrite';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/layouts/Banner';
import { useDispatch } from 'react-redux';
import DaySlices from '../../../redux/Slices/DaySlices';

//'0000-00-00' 형식으로 날쩌 포멧팅
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};
let today = new Date();
today = formatDate(today);

export default function GuestApply() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [filterCate, setFilterCate] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DaySlices.actions.change(today));
  });

  return (
    <Main>
      <MainFunctionNavbar />
      <Banner />
      <WeeklyCalendar />
      <Space />
      <MatchListFilter setFilter={setFilter} setFilterCate={setFilterCate} />
      <MatchWrite
        onClick={() => {
          navigate('/matching/guesthost');
        }}
        text='게스트 '
      />
      <MatchList filter={filter} filterCate={filterCate} />
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
