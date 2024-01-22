import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2c8dff;
  width: 360px;
  height: 528px;
`;

export const MainTitle = styled.h1`
  margin-top: 40px;
  text-align: center;
  line-height: 36px;
  letter-spacing: -1.2px;
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
`;

export const MainImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  gap: 20px 30px;
  margin-top: 20px;
  width: 270px;

  /* 임시코드 */
  border: 1px solid white;
`;

export const BallContainer = styled.div``;

export const BallImage = styled.img``;

export const BallName = styled.p``;

export const ImageInfo = styled.div`
  margin-top: 34px;
  text-align: center;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: var(--Blue200, #bddbff);
  font-family: Pretendard;
  font-size: 16px;
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 424px;

  /* 임시코드 */
  padding-top: 34px;
  color: #2c8dff;
  text-align: center;
  border: 1px solid black;
`;
