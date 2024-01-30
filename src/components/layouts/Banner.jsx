import React from 'react';
import * as S from './Banner.style';

export default function MainFunctionNavbar() {
  return (
    <S.Main>
      <S.Wrapper>
        <S.Button>
          <S.NavStyle to='/matching/guestapply'>게스트</S.NavStyle>
        </S.Button>
        <S.Button>
          <S.NavStyle to='/matching/teamapply'>연습경기</S.NavStyle>
        </S.Button>
        <S.Button>
          <S.NavStyle to='/information'>대관정보</S.NavStyle>
        </S.Button>
        <S.Button>
          <S.NavStyle to='/community'>커뮤니티</S.NavStyle>
        </S.Button>
      </S.Wrapper>
      <S.Banner />
    </S.Main>
  );
}
