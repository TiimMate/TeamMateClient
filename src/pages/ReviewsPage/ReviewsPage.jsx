import React from 'react';
import * as S from './ReviewsPage.style';
import WeeklyCalendar from '../../components/layouts/WeeklyCalendar';
import MatchList from '../../components/layouts/Matching/MatchList';

const NAV_ITEM_LIST = [
  {
    label: '게스팅 내역',
    url: '#',
  },
  {
    label: '호스팅 내역',
    url: '#',
  },
];

export default function ReviewsPage() {
  return (
    <S.PageLayout>
      <S.Nav>
        {NAV_ITEM_LIST.map(({ label, url }) => (
          <S.NavItem key={label} href={url}>
            {label}
          </S.NavItem>
        ))}
      </S.Nav>
      <S.Banner></S.Banner>
      <WeeklyCalendar />
      <MatchList />
    </S.PageLayout>
  );
}
