import React from 'react';
import * as S from './MatchHistoryForHost.style';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchHistoryList from '../../../components/layouts/Matching/MatchHistoryList';

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
  return (
    <S.PageLayout>
      <S.Nav>
        {NAV_ITEM_LIST.map(({ label, url, isActive }) => (
          <S.NavItem key={label} href={url} isActive={isActive}>
            {label}
          </S.NavItem>
        ))}
      </S.Nav>
      <S.Banner></S.Banner>
      <WeeklyCalendar />
      <MatchHistoryList />
    </S.PageLayout>
  );
}
