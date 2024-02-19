import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HomePage.style';

const sportsData = {
  basketball: '농구',
  baseball: '야구',
  tennis: '테니스',
  soccer: '축구',
  futsal: '풋살',
  volleyball: '배구',
  bowling: '볼링',
  badminton: '배드민턴',
  'table-tennis': '탁구',
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
              {Object.entries(sportsData).map(([key, sport], index) => (
                <div key={index}>
                  <Link to={`/${key}/matching/guestapply`}>
                    <img
                      src={`/assets/img-ball/img-ball-${key}.png`}
                      alt={`Image ${index + 1}`}
                    />
                  </Link>
                  <S.BallName>{sport}</S.BallName>
                </div>
              ))}
            </S.BallImageList>
          </S.BallContainer>
        </S.MainImage>
        <S.ImageInfo>클릭하면 각 종목 페이지로 이동합니다.</S.ImageInfo>
      </S.Container>

      {/* 서비스 소개 섹션 */}
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

        <S.RegisteringTeam>
          <S.Guide>팀메이트 사용 가이드</S.Guide>
          <S.GuideContainer>
            <S.GuideNum>1</S.GuideNum>
            <S.GuideTitle>선수 / 팀 등록하기</S.GuideTitle>
            <S.GuideDescription>
              게스트로 경기에 참여하고 싶다면 선수 정보를,
              <br />
              우리 팀의 게스트나 연습 상대를 구하고 싶다면
              <br />팀 정보를 등록해주세요!
            </S.GuideDescription>
          </S.GuideContainer>
        </S.RegisteringTeam>

        <S.Matching>
          <S.GuideContainer paddingTop>
            <S.GuideNum alignRight>2</S.GuideNum>
            <S.GuideTitle>매칭 신청하기</S.GuideTitle>
            <S.GuideDescription>
              게스트로서 팀 경기에 참여하거나,
              <br />
              팀의 연습경기 상대를 모집할 수 있어요!
            </S.GuideDescription>
          </S.GuideContainer>
        </S.Matching>

        <S.Review>
          <S.GuideContainer paddingTop>
            <S.GuideNum>3</S.GuideNum>
            <S.GuideTitle>리뷰 등록하기</S.GuideTitle>
            <S.GuideDescription>
              경기가 끝나면 함께한 게스트,
              <br />
              혹은 팀의 리뷰를 남겨주세요!
              <br />
              평가가 쌓일수록 매칭의 정확도가 올라갑니다!
              <br />
            </S.GuideDescription>
          </S.GuideContainer>
        </S.Review>
      </S.ServiceContainer>
    </S.PageLayout>
  );
}
