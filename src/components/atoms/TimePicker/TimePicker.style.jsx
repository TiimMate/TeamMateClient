import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 40px 0 0 0;

  background: white;
`;
export const TimePickerContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 85px;
  margin: 23px;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemContainer = styled.ul`
  height: 85px;
`;

export const Item = styled.li`
  height: 28.3px;
  width: 30px;

  color: var(--Neutral-Black, #061119);
  text-align: center;
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.048px;
`;

export const P = styled.p`
  box-sizing: border-box;

  width: 26.88px;

  color: var(--Neutral-Black, #061119);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.048px;
`;
