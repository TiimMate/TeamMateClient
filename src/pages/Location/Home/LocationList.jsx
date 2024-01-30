import React from 'react';
import NewPost from '../../../components/layouts/NewPostButton';
import MainFunctionNavbar from '../../../components/layouts/MainFunctionNavbar';
import UnitSpaceInfoRow from '../../../components/ui/UnitSpaceInfoRow/UnitSpaceInfoRow';
import * as S from './LocationList.style';

export default function LocationList() {
  return (
    <S.Wrapper>
      <MainFunctionNavbar />
      <NewPost />

      <S.HeaderContainer>
        <S.Title>제목</S.Title>
        <S.Status>상태</S.Status>
      </S.HeaderContainer>

      <UnitSpaceInfoRow />
    </S.Wrapper>
  );
}
