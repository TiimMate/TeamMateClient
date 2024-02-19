import React, { useEffect, useState } from 'react';
import * as S from './MatchHistoryForGuest.style';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchHistoryList from '../../../components/layouts/Matching/MatchHistoryList';
import { getGuestingMatchingList } from '../../../services/matchingService';

const NAV_ITEM_LIST = [
  {
    label: '게스팅 내역',
    url: '/matching/history/',
    isActive: true,
  },
  {
    label: '호스팅 내역',
    url: '/matching/history/host',
    isActive: false,
  },
];

export default function MatchHistoryForGuest() {
  const [selectedDate, setSelectedDate] = useState(String('2023-02-18'));
  const [matchingList, setMatchingList] = useState([]);

  useEffect(() => {
    getGuestingMatchingList({ date: selectedDate }).then(({ result }) => {
      setMatchingList(result);
    });
  }, [selectedDate]);

  return (
    <S.PageLayout>
      <S.Nav>
        {NAV_ITEM_LIST.map(({ label, url, isActive }) => (
          <S.NavItem key={label} href={url} isActive={isActive}>
            {label}
          </S.NavItem>
        ))}
      </S.Nav>
      <S.Banner />
      <WeeklyCalendar /> // 수정필요
      <MatchHistoryList matchingList={matchingList} />
    </S.PageLayout>
  );
}
