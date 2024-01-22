import React from 'react';
import * as S from './HomePage.style';

const IMAGE_URL_LIST = [
  '/assets/img-ball/img-ball-basketball.png',
  '/assets/img-ball/img-ball-baseball.png',
  '/assets/img-ball/img-ball-tennis.png',
  '/assets/img-ball/img-ball-soccer.png',
  '/assets/img-ball/img-ball-futsal.png',
  '/assets/img-ball/img-ball-volleyball.png',
  '/assets/img-ball/img-ball-bowling.png',
  '/assets/img-ball/img-ball-badminton.png',
  '/assets/img-ball/img-ball-pingpong.png',
];

export default function HomePage() {
  return (
    <S.PageLayout>
      <S.Container>
        <S.MainTitle>
          팀메이트에서
          <br />
          다양한 종목을 만나보세요
        </S.MainTitle>
        <S.MainImage className='grid-container'>
          <S.BallContainer>
            <S.BallImage>
              {IMAGE_URL_LIST.map((imageUrl, index) => (
                <div key={index} className='grid-item'>
                  <img src={imageUrl} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </S.BallImage>
            <S.BallName>농구</S.BallName>
          </S.BallContainer>
        </S.MainImage>
        <S.ImageInfo>클릭하면 각 종목 페이지로 이동합니다.</S.ImageInfo>
      </S.Container>
      <S.ServiceInfo>
        팀메이트는 이런 서비스예요
        <br />
        (업데이트 예정)
      </S.ServiceInfo>
    </S.PageLayout>
  );
}
