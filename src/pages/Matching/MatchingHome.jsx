import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainFunctionNavbar from '../../components/layouts/MainFunctionNavbar';
// import GuestApply from './MatchApply/GuestApply';
// import TeamApply from './MatchApply/TeamApply';
import WeeklyCalendar from '../../components/layouts/WeeklyCalendar';
import { useDispatch } from 'react-redux';
import CategorySlices from '../../redux/Slices/CategorySlices';
import { useNavigate, useParams } from 'react-router-dom';

export default function MatchingHome() {
  const navigate = useNavigate();
  const { category } = useParams();
  useEffect(() => {
    navigate(`/${category}/matching/guestapply`);
  });

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
