import React from 'react';
import * as S from './MatchHistoryForHost.style';
import MatchList from '../../../components/layouts/Matching/MatchList';

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

export default function MatchHistoryForHost() {
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
      <MatchList />
    </S.PageLayout>
  );
}
