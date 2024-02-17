import React from 'react';
import * as S from './MainFunctionNavbar.style';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function MainFunctionNavbar() {
  const { category } = useParams();
  return (
    <S.Main>
      <S.Wrapper>
        <S.Button>
          <S.NavStyle to={`/${category}/matching/guestapply`}>
            게스트
          </S.NavStyle>
        </S.Button>
        <S.Button>
          <S.NavStyle to={`/${category}/matching/teamapply`}>
            연습경기
          </S.NavStyle>
        </S.Button>
        <S.Button>
          <S.NavStyle to='/location'>대관정보</S.NavStyle>
        </S.Button>
        <S.Button>
          <S.NavStyle to='/community'>커뮤니티</S.NavStyle>
        </S.Button>
      </S.Wrapper>
    </S.Main>
  );
}
