import React from 'react';
import * as S from './HomePage.style';
import '../../assets/img-ball';

const images = [
  'img-ball-basketball.png',
  'img-ball-baseball.png',
  'img-ball-tennis.png',
  'img-ball-soccer.png',
  'img-ball-futsal.png',
  'img-ball-volleyball.png',
  'img-ball-bowling.png',
  'img-ball-badminton.png',
  'img-ball-pingpong.png',
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
              {images.map((image, index) => (
                <div key={index} className='grid-item'>
                  <img src={image} alt={`Image ${index + 1}`} />
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
