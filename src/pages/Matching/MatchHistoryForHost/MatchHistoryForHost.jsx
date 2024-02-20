import React, { useEffect, useState } from 'react';
import * as S from './MatchHistoryForHost.style';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchHistoryList from '../../../components/layouts/Matching/MatchHistoryList';
import { getHostingMatchingList } from '../../../services/matchingService';

const NAV_ITEM_LIST = [
  {
    label: '게스팅 내역',
    url: '/matching/history/',
    isActive: false,
  },
  {
    label: '호스팅 내역',
    url: '/matching/history/host',
    isActive: true,
  },
];

export default function MatchHistoryForHost() {
  const [selectedDate, setSelectedDate] = useState(
    String(new Date('2023-02-18')),
  );
  const [matchingList, setMatchingList] = useState([]);

  useEffect(() => {
    getHostingMatchingList({ date: selectedDate }).then(({ result }) => {
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
      <WeeklyCalendar setSelectedDate={setSelectedDate} /> {/* 수정필요 OK */}
      <MatchHistoryList matchingList={matchingList} />
    </S.PageLayout>
  );
}
