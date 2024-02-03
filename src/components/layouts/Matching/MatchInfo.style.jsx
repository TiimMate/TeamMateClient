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

export const Time = styled.div`
  display: flex;
  align-items: center;

  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
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
  color: var(--Blue300, #0075ff);

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
  color: var(--Black, var(--kakao-logo, #000));
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 30px;
  border-radius: 6px;

  background: var(--Blue300, #0075ff);

  color: white;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.6px;
`;
