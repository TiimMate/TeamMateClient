import React from 'react';
import * as S from './HomePage.style';

export default function HomePage() {
  return (
    <S.PageLayout>
      <S.Container>
        <S.MainTitle>
          팀메이트에서
          <br />
          다양한 종목을 만나보세요
        </S.MainTitle>
        <S.MainImage>s</S.MainImage>
        <S.ImageInfo>클릭하면 각 종목 페이지로 이동합니다.</S.ImageInfo>
      </S.Container>
      <S.ServiceInfo>팀메이트는 이런 서비스예요</S.ServiceInfo>
    </S.PageLayout>
  );
}
