import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  place-items: center;

  grid-template-columns: 33px 40px 106px 1fr 70px;
  width: 100%;
  height: 70px;
  padding: 8px 21px 8px 20px;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamName = styled.p`
  color: var(--kakao-logo, #000);

  /* 12md */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;

export const MatchLocation = styled.p`
  color: var(--blue-400, #0075ff);
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 200% */
  letter-spacing: -0.4px;
`;

export const MatchDetail = styled.p`
  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 200% */
  letter-spacing: -0.4px;
  color: var(--black, var(--kakao-logo, #000));
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
`;
export const Space = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled.div`
  display: flex;
  width: 70px;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 6px;
  background: var(--blue-400, #0075ff);

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;
