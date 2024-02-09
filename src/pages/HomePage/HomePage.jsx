import React from 'react';
import * as S from './HomePage.style';

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

      <S.ServiceContainer>
        <S.ServiceIntroContainer>
          <S.ServiceIntro>
            <S.ServiceIntroTitle>
              팀메이트는
              <br />
              어떤 서비스인가요?
            </S.ServiceIntroTitle>
            <S.ServiceIntroDescription>
              팀스포츠를 사랑하는 사람들을 위해
              <br />
              <span>나와 맞는 팀 혹은 메이트를 만날 수 있게 </span>
              <br />
              <span>만남과 경기를 더욱 편하게</span>
              <br />
              만들어주는 서비스입니다.
            </S.ServiceIntroDescription>
          </S.ServiceIntro>
        </S.ServiceIntroContainer>

        <S.RegisteringTeamContainer>
          <S.RegisteringTeam>
            <S.RegisteringTeamSub>팀메이트 사용 가이드</S.RegisteringTeamSub>
            <S.ServiceInfoContainer>
              <S.ServiceInfoNum>1</S.ServiceInfoNum>
              <S.ServiceInfoTitle>선수 / 팀 등록하기</S.ServiceInfoTitle>
              <S.ServiceInfoDescription>
                게스트로 경기에 참여하고 싶다면 선수 정보를,
                <br />
                우리 팀의 게스트나 연습 상대를 구하고 싶다면
                <br />팀 정보를 등록해주세요!
              </S.ServiceInfoDescription>
            </S.ServiceInfoContainer>
          </S.RegisteringTeam>
        </S.RegisteringTeamContainer>

        <S.Matching>
          <S.ServiceInfoContainer>
            <S.ServiceInfoNum alignRight>2</S.ServiceInfoNum>
            <S.ServiceInfoTitle>매칭 신청하기</S.ServiceInfoTitle>
            <S.ServiceInfoDescription>
              게스트로서 팀 경기에 참여하거나,
              <br />
              팀의 연습경기 상대를 모집할 수 있어요!
            </S.ServiceInfoDescription>
          </S.ServiceInfoContainer>
        </S.Matching>

        <S.Review>
          <S.ServiceInfoContainer>
            <S.ServiceInfoNum>3</S.ServiceInfoNum>
            <S.ServiceInfoTitle>리뷰 등록하기</S.ServiceInfoTitle>
            <S.ServiceInfoDescription>
              경기가 끝나면 함께한 게스트,
              <br />
              혹은 팀의 리뷰를 남겨주세요!
              <br />
              평가가 쌓일수록 매칭의 정확도가 올라갑니다!
              <br />
            </S.ServiceInfoDescription>
          </S.ServiceInfoContainer>
        </S.Review>
      </S.ServiceContainer>
    </S.PageLayout>
  );
}
