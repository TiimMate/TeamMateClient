import React from 'react';
import * as S from './HomePage.style';
import ServiceIntroduction from '../../assets/png-service-introduction.png';

const sportsData = {
  '/assets/img-ball/img-ball-basketball.png': '농구',
  '/assets/img-ball/img-ball-baseball.png': '야구',
  '/assets/img-ball/img-ball-tennis.png': '테니스',
  '/assets/img-ball/img-ball-soccer.png': '축구',
  '/assets/img-ball/img-ball-futsal.png': '풋살',
  '/assets/img-ball/img-ball-volleyball.png': '배구',
  '/assets/img-ball/img-ball-bowling.png': '볼링',
  '/assets/img-ball/img-ball-badminton.png': '배드민턴',
  '/assets/img-ball/img-ball-pingpong.png': '탁구',
};

export default function HomePage() {
  return (
    <S.PageLayout>
      <S.Container>
        <S.MainTitle>
          팀메이트에서
          <br />
          다양한 종목을 만나보세요
        </S.MainTitle>
        <S.MainImage>
          <S.BallContainer>
            <S.BallImageList>
              {Object.keys(sportsData).map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Image ${index + 1}`}></img>
                  <S.BallName>{sportsData[imageUrl]}</S.BallName>
                </div>
              ))}
            </S.BallImageList>
          </S.BallContainer>
        </S.MainImage>
        <S.ImageInfo>클릭하면 각 종목 페이지로 이동합니다.</S.ImageInfo>
      </S.Container>
      <S.ServiceInfo>
        <img src={ServiceIntroduction} alt='서비스 소개' />
      </S.ServiceInfo>
    </S.PageLayout>
  );
}
