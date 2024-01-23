import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2c8dff;
  width: 100%;
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
  align-items: center;
  justify-content: center;
  gap: 20px 30px;
  margin-top: 20px;
  width: 768px;
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
  color: var(--white, #fff);
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
