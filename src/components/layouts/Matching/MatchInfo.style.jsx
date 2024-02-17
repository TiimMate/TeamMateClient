import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: Pretendard;
  height: 70px;
  justify-content: space-between;
  border-top: 1px solid var(--gray-100);
  padding: 8px 20px;
  width: 100%;
`;

export const MatchInfo = styled.div`
  align-items: center;
  display: flex;
  gap: 26px;
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
  gap: 3px;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TeamName = styled.h3`
  color: black;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  line-height: 25px;
`;

export const LocationInfo = styled.div`
  display: flex;
  color: var(--blue-400, #0075ff);
  font-size: 11px;
  letter-spacing: -0.4px;
  line-height: 16px;
  letter-spacing: -0.55px;
  gap: 2px;
`;

export const LocationIcon = styled.div`
  width: 8px;
  height: 8px;
`;

export const LocationName = styled.p``;

export const MatchDetail = styled.p`
  color: black;
  font-size: 11px;
  letter-spacing: -0.4px;
  line-height: 16px;
`;

export const Button = styled.div`
  align-items: center;
  border-radius: 6px;
  background: blue;
  background: ${({ reviewStatus }) => {
    switch (reviewStatus) {
      case 'COMPLETED':
        return 'var(--gray-200)';
      case 'UNCOMPLETED':
        return 'var(--blue-400, #0075ff)';
      case 'PENDING':
        return 'var(--blue-200)';
      default:
        return 'var(--blue-400, #0075ff)';
    }
  }};
  color: ${
    ({ reviewStatus }) =>
      reviewStatus === 'PENDING' ? 'var(--blue-400)' : 'white' // PENDING 상태일 때 글자색 변경
  };
  display: flex;
  font-size: 12px;
  height: 30px;
  justify-content: center;
  letter-spacing: -0.6px;
  line-height: 22px;
  width: 70px;
  cursor: pointer;
`;
