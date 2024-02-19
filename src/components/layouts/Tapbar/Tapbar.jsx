import { useLocation, useNavigate } from 'react-router-dom';

import LogoWithDescription from './LogoWithDescription';

import { useState } from 'react';
import * as S from './Tapbar.style';

import HomeBlue from '../../../assets/home-blue.svg';
import HomeGray from '../../../assets/home-gray.svg';
import TeamBlue from '../../../assets/team-blue.svg';
import TeamGray from '../../../assets/team-gray.svg';
import BoardBlue from '../../../assets/board-blue.svg';
import BoardGray from '../../../assets/board-gray.svg';
import AvatarBlue from '../../../assets/avatar-blue.svg';
import AvatarGray from '../../../assets/avatar-gray.svg';

function Tapbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const select = () => {
    if (/^\/team/.test(pathname)) return 1;
    if (/^\/matching/.test(pathname)) return 2;
    if (/^\/my/.test(pathname)) return 3;
    return 0;
  };

  const selected = select();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Blank />
        <LogoWithDescription
          onClick={() => navigate('/')}
          selected={selected === 0}
          icon={selected === 0 ? HomeBlue : HomeGray}
          description='홈'
        />
        <S.Blank />
        <LogoWithDescription
          onClick={() => navigate('/team')}
          selected={selected === 1}
          icon={selected === 1 ? TeamBlue : TeamGray}
          description='팀'
        />
        <S.Blank />
        <LogoWithDescription
          onClick={() => navigate('/matching/history')}
          selected={selected === 2}
          icon={selected === 2 ? BoardBlue : BoardGray}
          description='매칭내역'
        />
        <S.Blank />
        <LogoWithDescription
          onClick={() => navigate('/my')}
          selected={selected === 3}
          icon={selected === 3 ? AvatarBlue : AvatarGray}
          description='마이페이지'
        />
        <S.Blank />
      </S.Container>
    </S.Wrapper>
  );
}

export default Tapbar;
