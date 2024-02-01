import React from 'react';
import * as S from './MatchHistoryForHostMember.style';
import WeeklyCalendar from '../../../components/layouts/WeeklyCalendar';
import MatchMemberList from '../../../components/layouts/Matching/MatchMemberList';
import {
  formatMemberData,
  MEMBER_RAW_DATA_BASKETBALL,
} from '../../../utils/formatData';

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

const HOST_MEMBERS_DATA = formatMemberData(MEMBER_RAW_DATA_BASKETBALL);

export default function MatchHistoryForHostMember() {
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

      {HOST_MEMBERS_DATA.map((hostMember, index) => (
        <MatchMemberList key={index} member={hostMember.unitInfo} />
      ))}
    </S.PageLayout>
  );
}
