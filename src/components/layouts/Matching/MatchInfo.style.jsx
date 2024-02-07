import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: Pretendard;
  height: 70px;
  justify-content: space-between;
  padding: 8px 20px;
  width: 100%;
`;

export const MatchInfo = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const Time = styled.div`
  align-items: center;
  color: black;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamName = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.6px;
  line-height: 22px;
`;

export const MatchLocation = styled.p`
  color: var(--blue-400, #0075ff);
  font-size: 11px;
  letter-spacing: -0.4px;
  line-height: 16px;
`;

export const MatchDetail = styled.p`
  color: black;
  font-size: 11px;
  letter-spacing: -0.4px;
  line-height: 16px;
`;

export const Button = styled.div`
  align-items: center;
  background: var(--blue-400, #0075ff);
  border-radius: 6px;
  color: white;
  display: flex;
  font-size: 12px;
  height: 30px;
  justify-content: center;
  letter-spacing: -0.6px;
  line-height: 22px;
  width: 70px;
`;
