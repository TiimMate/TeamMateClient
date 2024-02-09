import styled from 'styled-components';
import backgroundImg1 from '../../assets/background-1.png';
import backgroundImg2 from '../../assets/background-2.png';
import backgroundImg3 from '../../assets/background-3.png';
import backgroundImg4 from '../../assets/background-4.png';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blue-300, #2c8dff);
  width: 100%;
  height: 528px;
`;

export const MainTitle = styled.h1`
  margin-top: 40px;
  text-align: center;
  line-height: 36px;
  letter-spacing: -1.2px;
  color: white;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
`;

export const MainImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px 30px;
  margin-top: 20px;
`;

export const BallContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BallImageList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 30px;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

export const BallName = styled.p`
  margin-top: 2px;
  line-height: 16px; /* 160% */
  letter-spacing: -0.5px;
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 600;
`;

export const ImageInfo = styled.div`
  margin-top: 34px;
  text-align: center;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: var(--blue-200, #bddbff);
  font-family: Pretendard;
  font-size: 16px;
`;

// 서비스 소개 페이지
export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceIntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImg1});
  background-size: cover;
  height: 435px;
`;

export const ServiceIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: center;
  color: var(--blue-400);
  font-family: Pretendard;
`;

export const ServiceIntroTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1.4px;
`;

export const ServiceIntroDescription = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.9px;

  span {
    padding: 1px 4px;
    color: white;
    font-family: Pretendard;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.9px;
    background: var(--blue-400);
  }
`;

export const RegisteringTeam = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg2});
  background-size: cover;
  align-items: flex-start;
  height: 331px;
  padding: 12px 30px;
  gap: 12px;
  color: var(--blue-400);
  font-family: Pretendard;
`;

export const Guide = styled.p`
  display: flex;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: -0.55px;
  text-align: right;
  margin-left: auto;
`;

export const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GuideNum = styled.p`
  justify-content: center;
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  border-radius: 50%;
  color: white;
  background: var(--blue-300);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.6px;

  ${({ alignRight }) =>
    alignRight &&
    `
  text-right: right;
  margin-left:auto`}
`;

export const GuideTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1.4px;
  color: var(--blue-400);
  font-family: Pretendard;
`;

export const GuideDescription = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: var(--blue-400);
`;

export const Matching = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: right;
  background-image: url(${backgroundImg3});
  background-size: cover;
  padding: 66px 30px;
  height: 223px;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${backgroundImg4});
  background-size: cover;
  padding: 44px 30px;
  height: 563px;
  gap: 12px;
`;
